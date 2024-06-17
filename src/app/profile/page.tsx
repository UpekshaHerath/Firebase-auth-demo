'use client';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";
import MainHeader from "@/components/MainHeader";

export default function SignIn() {
    const [uid, setUid] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                console.log(user)
                setUid(user.uid);
                setUserEmail(user.email);
            } else {
                console.log("User is signed out");
            }
        });
    }, [])

    return (
        <section className="flex flex-col items-center p-24 h-svh">
            <MainHeader headerText="User Profile" />
            <p>{uid ? "User ID : " + uid : "No user has signed in"}</p>
            <p>{userEmail ? "User email : " + userEmail : "No User has signed in"}</p>
        </section>
    );
}
