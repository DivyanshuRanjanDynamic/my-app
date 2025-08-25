import React from "react";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <Image src="/next.svg" alt="Next.js" width={120} height={24} />
      <h1 className="text-2xl font-semibold">Welcome{session?.user?.name ? `, ${session.user.name}` : ""}!</h1>
      <p className="text-muted-foreground">You are signed in.</p>
      <form action={async () => { "use server"; await signOut({ redirectTo: "/auth/sign-in" }); }}>
        <Button type="submit" variant="outline">Sign out</Button>
      </form>
    </main>
  );
}


