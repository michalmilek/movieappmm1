import React from "react";

const Auth = () => {
  return (
    <div className="flex gap-10 justify-center items-center min-h-[50vh]">
      <div className="border-[3px] flex flex-col gap-5 px-4 py-8 bg-white">
        <button>Sign in with Google</button>
        <button>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default Auth;
