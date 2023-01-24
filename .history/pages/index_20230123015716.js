import Head from 'next/head'
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
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
      <Results results={results} />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ query }) {
  const category = query.category;
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SITE}${
      requests[category]?.url || requests.fetchTrending.url
    }`
  );
  const data = await res.json();

  // Pass post data to the page via props
  return {
    props: {
      results: data.results,
    },
  };
}