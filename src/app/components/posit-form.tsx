"use client";

import toast from "react-hot-toast";
import { postMessage } from "../actions/posting";

export default function PositivityForm({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <form
      action={async (formData: FormData) => {
        const result = await postMessage(formData);

        if (result?.error) {
          toast.error(result.error);
        } else {
          toast.success('Positive message sent!');
        }
      }}
      className="w-full max-w-xs sm:max-w-lg md:max-w-2xl flex flex-col gap-y-5"
    >
      {children}
    </form>
  );
}
