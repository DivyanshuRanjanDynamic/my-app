import React from "react";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";

export default async function HomePage() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <UserButton />
    </div>
  );
}


