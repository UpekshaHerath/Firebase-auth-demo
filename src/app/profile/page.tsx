'use client';

import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [user, Loading, error] = useAuthState(auth);
    const router = useRouter();
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        if (!user) {
            router.push("/sign-in");
        }
    }, [])

    return (
        <section className="flex flex-col items-center p-24 h-svh">
            <MainHeader headerText="User Profile" />
            {user ? <Image src={user.photoURL ? user.photoURL : "/images/avatar.png"} alt="User profile picture" width={70} height={70} className="rounded-[50%]" /> : null}
            {user ? <p className="font-bold">{user.displayName}</p> : null}
            <p>{userEmail ? userEmail : "No User has signed in"}</p>
        </section>
    );
}
