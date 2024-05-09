import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    userId: text("userId").notNull(),
    message: text("message").notNull()
});

