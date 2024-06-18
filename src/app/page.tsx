'use client';
import Button from "@/components/Button";
import MainHeader from "@/components/MainHeader";
import { auth } from "@/config/firebase";
import Link from "next/link";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <MainHeader headerText="Home page" />
      <div>
        <Link href="/profile">
          <Button buttonText="User Profile" />
        </Link>
        <p className={`p-4 pl-0 font-bold ${user ? "text-lime-600" : "text-red-700"}`}>
          {user ? `Logged in as ${user.email}` : `Logged out. Have to log in.`}
        </p>
      </div>
    </main>
  );
}
