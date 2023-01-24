"use client";

import { userAgent } from "next/server";
import React from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfileLook = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <div className="flex gap-10 justify-center items-center min-h-[50vh]">
      Welcome at the ProfileLook {user.displayName}
    </div>
  );
};

export default ProfileLook;
