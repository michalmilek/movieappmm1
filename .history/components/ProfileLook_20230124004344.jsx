"use client";

import { userAgent } from "next/server";
import React from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const ProfileLook = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const router = useRouter();
  if (loading) return <h1>LOADING...</h1>;
  if (!user) router.push("/auth/login");
  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-[50vh]">
      <p>
        Welcome at the ProfileLook,
        <br />
        <span className="font-bold text-lg">{user.displayName}</span>
      </p>
      <button
        onClick={() => auth.signOut()}
        className="bg-black text-white px-4 py-2 rounded-full">
        Sign Out
      </button>
    </div>
  );
};

export default ProfileLook;
