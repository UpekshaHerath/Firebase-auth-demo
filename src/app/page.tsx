'use client';
import Button from "@/components/Button";
import MainHeader from "@/components/MainHeader";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from "next/image";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error.code + "\n" + error.message);
      });
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <MainHeader headerText="Home page" />
      <div>
        <Link href="/sign-up">
          <Button buttonText="Sign Up" />
        </Link>
        {user ? <><Button buttonText="Log out" onClick={signOutUser} /></> : <Link href={"/sign-in"}><Button buttonText="Log In" /></Link>}
        {user?.photoURL ? <Image src={user.photoURL ? user.photoURL : "/images/avatar.png"} alt="User profile picture" width={50} height={50} /> : null}
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
