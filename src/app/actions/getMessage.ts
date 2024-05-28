"use server";

import { auth } from "@clerk/nextjs/server";
import db from "../../../db/drizzle";
import { eq, ne, desc, and, gte, sql } from "drizzle-orm";
import { daily_activities, posts } from "../../../db/schema";
import { redirect } from "next/navigation";

export async function getMessage() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const userActivity = await db
    .select()
    .from(daily_activities)
    .where(
      and(
        eq(daily_activities.userId, userId),
        gte(daily_activities.last_sent_at, startOfToday)
      )
    )
    .limit(1);

  if (!userActivity || userActivity.length === 0) {
    redirect('/posting');
  }

  const post = await db
    .select({ message: posts.message })
    .from(posts)
    .where(ne(posts.userId, userId))
    .orderBy(sql`random()`)
    .limit(1);

  return post[0].message;
}

export async function alreadyPosted() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const userActivity = await db
    .select()
    .from(daily_activities)
    .where(
      and(
        eq(daily_activities.userId, userId),
        gte(daily_activities.last_sent_at, startOfToday)
      )
    )
    .limit(1);

  return userActivity.length === 1;
}
