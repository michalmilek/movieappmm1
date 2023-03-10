import Head from 'next/head'
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Header";

export default function Home() {
  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Head>
        <title>MOVIE LIST</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Header />
      <Navbar />
    </div>
  );
}
