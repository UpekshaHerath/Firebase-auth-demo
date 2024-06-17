'use client';

import { useState } from "react";
import MainHeader from "@/components/MainHeader";
import Button from "@/components/Button";
import { signIn } from "@/util/firebase/firebase";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const userSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        signIn({ email, password });
        resetForm();
    };

    return (
        <main className="flex flex-col items-center p-24 h-svh">
            <MainHeader headerText="Log In" />
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
                <Button buttonText={"Sign In"} onClick={userSignIn} />
            </form>
        </main>
    );
}
