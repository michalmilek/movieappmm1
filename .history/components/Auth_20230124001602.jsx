import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";

const Auth = () => {
  const GoogleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      console.log(result.user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex gap-10 justify-center items-center min-h-[50vh]">
      <div className="border-[3px] flex flex-col gap-5 px-4 py-8 bg-white">
        <button className="cursor-pointer hover:scale-110 transform transition-all hover:font-bold">
          Sign in with Google
        </button>
        <button className="cursor-pointer hover:scale-110 transform transition-all hover:font-bold">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Auth;
