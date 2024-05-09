"use server";

import { auth } from "@clerk/nextjs/server";
import db from "../../../db/drizzle";
import { eq, ne } from "drizzle-orm";
import { posts } from "../../../db/schema";

export async function getMessage() {

  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const post = await db.query.posts.findFirst({
    where: ne(posts.userId, userId),
  });

  return post?.message;
}

export async function alreadyPosted() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const post = await db.query.posts.findFirst({
    where: eq(posts.userId, userId),
  });

  if (!post) {
    return false;
  }

  const date = new Date().getDate();
  const createdDate = new Date(post.createdAt).getDate();

  return date === createdDate;
  
}