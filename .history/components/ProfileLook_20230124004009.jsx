"use client";

import { userAgent } from "next/server";
import React from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfileLook = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading) return <h1>LOADING...</h1>;
  return (
    <div className="flex gap-10 justify-center items-center min-h-[50vh]">
      Welcome at the ProfileLook,{""}
      <span className="font-bold text-lg">{user.displayName}</span>
    </div>
  );
};

export default ProfileLook;
