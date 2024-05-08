"use client";

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
          alert(result.error);
        }
      }}
      className="w-full max-w-xs sm:max-w-lg md:max-w-2xl flex flex-col gap-y-5"
    >
      {children}
    </form>
  );
}
