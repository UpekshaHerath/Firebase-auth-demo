'use client'
import Link from "next/link";
import { FC } from "react";
import Button from "./Button";
import Image from "next/image";
import { signOutUser } from "@/util/firebase/firebase";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";

const Navbar: FC = () => {
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);
    const signOut = () => {
        signOutUser();
        router.push("/sign-up");
    }
    return (
        <div className="h-14 shadow-md flex items-center">
            <div className="flex w-full items-center justify-between mx-5">
                <Link href="/" className="font-bold">AuthDemo</Link>
                <div className="flex gap-3 items-center">
                    {user ? <><Button buttonText="Log out" onClick={signOut} /></> : <Link href={"/sign-in"}><Button buttonText="Log In" /></Link>}
                    <Link href="/sign-up">
                        <Button buttonText="Sign Up" />
                    </Link>
                    {user ? <Image src={user.photoURL ? user.photoURL : "/images/avatar.png"} alt="User profile picture" width={40} height={40} className="rounded-[50%]" /> : null}
                </div>
            </div>
        </div>
    )
};

export default Navbar;