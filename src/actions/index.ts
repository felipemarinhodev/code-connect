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
