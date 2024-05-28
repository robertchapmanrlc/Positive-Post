"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="py-2 px-3 text-background bg-primary hover:bg-hover active:bg-active disabled:bg-disabled rounded-md"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
