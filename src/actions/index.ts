"use server";

import { Comment, Post } from "@prisma/client";
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

export async function postComment(post: Post, formData: FormData) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  const text = formData.get("text");

  if (author?.id === undefined && !text) {
    throw new Error(
      "A problem happened when trying to recover user information."
    );
  }

  await db.comment.create({
    data: {
      text,
      authorId: author?.id,
      postId: post.id,
    },
  });
  formData.delete("text");
  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function postReply(parent: Comment, formData: FormData) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  const post = await db.post.findFirst({
    where: {
      id: parent.postId,
    },
  });

  const text = formData.get("text");

  if (!post) {
    throw new Error(
      "A problem happened when trying to recover post information."
    );
  }

  await db.comment.create({
    data: {
      text,
      authorId: author?.id,
      postId: post.id,
      parentId: parent.parentId ?? parent.id,
    },
  });
  formData.delete("text");
  revalidatePath(`/${post.slug}`);
}
