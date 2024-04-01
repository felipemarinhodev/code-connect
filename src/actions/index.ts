"use server";

import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import db from "../../prisma/db";

export async function incrementThumbsUp(post: Post) {
  await db.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 3500));

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function postComment(post: Post, formData: any) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  if (author?.id === undefined) {
    throw new Error(
      "A problem happened when trying to recover user information."
    );
  }

  await db.comment.create({
    data: {
      text: formData.get("text"),
      authorId: author?.id,
      postId: post.id,
    },
  });
  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}
