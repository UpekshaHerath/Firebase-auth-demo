'use client';

import { useState } from "react";
import Button from "@/components/Button";
import MainHeader from "@/components/MainHeader";
import { signUp } from "@/util/firebase/firebase";
import Link from "next/link";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const signUpUser = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        signUp({ email, password });
        resetForm();
    }

    return (
        <main className="flex flex-col items-center p-24 h-svh">
            <MainHeader headerText="Sign Up" />
            <form className="flex flex-col items-center gap-4">
                <input
                    className="p-2 border-2 rounded-lg"
                    type="email"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />
                <input
                    className="p-2 border-2 rounded-lg"
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />
                <Button buttonText={"Sign Up"} onClick={signUpUser} />
            </form>
            <Link href="/sign-in" className="align-left">Already have an account</Link>
        </main>
    );
}
