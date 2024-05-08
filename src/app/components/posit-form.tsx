'use client';

import { postMessage } from "../actions/posting";

export default function PositivityForm({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <form
      action={postMessage}
      className="w-full max-w-xs sm:max-w-lg md:max-w-2xl flex flex-col gap-y-5"
    >
      {children}
    </form>
  );
}
