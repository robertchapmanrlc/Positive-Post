"use server";

import { auth } from "@clerk/nextjs/server";
import db from "../../../db/drizzle";
import { eq, ne, desc } from "drizzle-orm";
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

  const userPosts = await db.query.posts.findMany({
    where: eq(posts.userId, userId),
    orderBy: desc(posts.createdAt),
    limit: 1
  });

  if (!userPosts) {
    return false;
  }

  const date = new Date().getDate();
  const createdDate = new Date(userPosts[0].createdAt).getDate();

  return date === createdDate;
  
}