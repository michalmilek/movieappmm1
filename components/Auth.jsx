"use client";

import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Auth = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const GoogleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      console.log(result.user);
    } catch (err) {
      console.log(err);
    }
  };

  //FB
  const fbProvider = new FacebookAuthProvider();
  const fbLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      console.log(result.user);
    } catch (err) {
      console.log(err);
    }
  };

  if (user) router.push("/dashboard");
  return (
    <div className="flex gap-10 justify-center items-center min-h-[50vh]">
      <div className="border-[3px] flex flex-col gap-5 px-4 py-8 bg-white">
        <button
          onClick={() => GoogleLogin()}
          className="cursor-pointer hover:scale-110 transform transition-all hover:font-bold">
          Sign in with Google
        </button>
        <button
          onClick={() => fbLogin()}
          className="cursor-pointer hover:scale-110 transform transition-all hover:font-bold">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Auth;
