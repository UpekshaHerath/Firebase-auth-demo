'use client';

import { useState } from "react";
import MainHeader from "@/components/MainHeader";
import Button from "@/components/Button";
import { signIn, signInWithGoogle } from "@/util/firebase/firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const userSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        await signIn({ email, password });
        resetForm();
        router.push("/profile");
    };

    const signInByGoogle = async () => {
        const result: any = await signInWithGoogle();
    }

    return (
        <main className="flex flex-col items-center p-24 h-svh">
            <MainHeader headerText="Log In" />
            <form className="flex flex-col items-center gap-4 mb-4">
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
            <div className="flex w-74">
                <GoogleLoginButton onClick={signInByGoogle} style={{
                    fontSize: '1rem',
                    borderRadius: '0.375rem',
                    fontWeight: 'bold'
                }} />
            </div>
        </main>
    );
}
