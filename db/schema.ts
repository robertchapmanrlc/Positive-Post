import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const daily_activities = pgTable("daily_activities", {
  daily_activity_id: serial('id').primaryKey(),
  userId: text("userId").notNull().unique(),
  last_sent_at: timestamp('last_sent_at').notNull().defaultNow()
});
