import { UserButton } from "@clerk/nextjs";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full pt-8 sm:pt-0">
      <div className="absolute right-4 top-4">
        <UserButton />
      </div>
      {children}
    </main>
  );
}
