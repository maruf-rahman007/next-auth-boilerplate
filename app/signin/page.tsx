"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function () {
    const router = useRouter();

    return <div>
        <button onClick={async () => {
            const res = await signIn("google", {
                redirect: true, // allow redirection
                callbackUrl: "/user" // specify the destination URL
            });
        }}>
            Login with Google
        </button>


        <button onClick={async () => {
            const res = await signIn("github", { redirect: false });
            if (res?.error) {
                console.log('GitHub sign-in error:', res.error);
            } else {
                router.push("/user");
            }
        }}>Login with Github</button>

        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>

    </div>
}