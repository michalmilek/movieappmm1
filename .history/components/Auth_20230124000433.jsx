import React from "react";

const Auth = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-[50vh]">
      <div className="border-[3px] bg-white">
        <button>Sign in with Google</button>
        <button>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default Auth;
