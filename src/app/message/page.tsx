
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function PositiveMessage() {

  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main>
      <h3 className="text-text">Thanks for sending a message</h3>
    </main>
  );
}
