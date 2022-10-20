import React from "react";
import useAuth from "../hooks/useAuth";
import Image from "next/image";
import NextflixLogo_img from "../public/assets/Netflix_logo.svg";
import Head from "next/head";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/outline";

const Plans = () => {
  const { logOut } = useAuth();

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <Image
            src={NextflixLogo_img}
            alt="Netflix"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>

        <button
          className="text-lg font-medium hover:underline"
          onClick={logOut}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-36 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan thats right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Plans;
