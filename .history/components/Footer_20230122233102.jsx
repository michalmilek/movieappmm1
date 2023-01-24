import React from "react";

const Footer = () => {
  const hovering =
    "hover:animate-bounce transition-all transform hover:scale-110";
  return (
    <footer className="py-8 border-t-2 border-t-black flex flex-col gap-16 md:flex-row justify-between items-center px-20 bg-gradient-to-r from-blue-500 mt-auto justify-items-end">
      <div>
        <ul className="flex flex-col gap-6 whitespace-nowrap">
          <li className="font-semibold tracking-widest cursor-pointer">
            Lorem, ipsum.
          </li>
          <li className="font-semibold tracking-widest cursor-pointer">
            Lorem, ipsum.
          </li>
          <li className="font-semibold tracking-widest cursor-pointer">
            Lorem, ipsum.
          </li>
          <li className="font-semibold tracking-widest cursor-pointer">
            Lorem, ipsum.
          </li>
          <li className="font-semibold tracking-widest cursor-pointer">
            Lorem, ipsum.
          </li>
        </ul>
      </div>

      <span className="text-3xl font-bold">All rights reserved.</span>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold select-none text-3xl text-center">
          Contact me:
        </h1>
        <ul className="flex mt-5 flex-col items-center gap-4">
          <li className="hover:animate-bounce font-semibold tracking-widest">
            <a href="">Github</a>
          </li>
          <li className="hover:animate-bounce select-none font-semibold tracking-widest">
            <a href="">LinkedIn</a>
          </li>
          <li className="hover:animate-bounce font-semibold tracking-widest">
            <a href="">My Portfolio</a>
          </li>
          <li className="hover:animate-bounce font-semibold tracking-widest">
            <a href="">Facebook</a>
          </li>
          <li className="hover:animate-bounce font-semibold tracking-widest">
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
