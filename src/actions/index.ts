"use server";

import { Post } from "@prisma/client";
import db from "../../prisma/db";

type incrementThumbsUpParams = {
  id: number;
};

export async function incrementThumbsUp(post: incrementThumbsUpParams) {
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
}
