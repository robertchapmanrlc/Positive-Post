"use server";

import { redirect } from "next/navigation";

export async function postMessage(userId: string, formData: FormData) {
  console.log(userId);
  console.log(formData);
  redirect('/message');
}
