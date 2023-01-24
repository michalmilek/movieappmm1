import requests from "../utils/requests";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="flex pt-6 pb-4 flex-wrap whitespace-nowrap gap-6 lg:gap-10 px-4 lg:px-20 justify-center bg-gradient-to-r from-blue-500 to-cyan-200 border-b-2 border-b-black">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?category=${key}`)}
            className="bg-black text-cyan-400 rounded-full px-4 py-2 text-sm lg:text-lg font-bold cursor-pointer active:scale-95 transform hover:scale-125 transition-all">
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
