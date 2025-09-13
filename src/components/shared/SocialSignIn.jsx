"use client"

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignIn = () => {
  const router = useRouter();
  const { status } = useSession();
  const searchParams = useSearchParams()
  const path = searchParams.get("redirect")

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleSocialLogin = (provider) => {
    signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/"
    });
  };

  return (
    <div className="flex gap-x-4">
      <button
        onClick={() => handleSocialLogin("google")}
        className="text-center text-2xl my-3 border-2 rounded-full p-1 btn"
      >
        <BsGoogle />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="text-center text-2xl my-3 border-2 rounded-full p-1 btn"
      >
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignIn;
