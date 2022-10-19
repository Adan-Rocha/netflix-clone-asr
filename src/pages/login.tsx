import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import NextflixLogoLogin_img from "../public/assets/Netflix_logo_Login.svg";
import bg_Login_img from "../public/assets/bg_Image_Login.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const [login, setLogin] = useState(true);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    if (login) {
      // router.push("/");
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={bg_Login_img}
        alt="Netflix"
        layout="fill"
        className="-z-10 opacity-60 sm:!inline"
        objectFit="cover"
      />
      <div className="absolute left-4 -top-10 cursor-pointer object-contain md:left-6 md:-top-10">
        <Image
          src={NextflixLogoLogin_img}
          alt="Netflix"
          width={150}
          height={150}
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:mt-18 relative  m-4 mt-32 space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-md md:px-14 "
      >
        <h1 className="text-4xl font-semibold"> Sign In</h1>

        <div className="space-y-8">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className={`input ${
                errors.email && "border-b-2 border-orange-500"
              }`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>

          <label className="inline-block w-full">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className={`input ${
                errors.password && "border-b-2 border-orange-500"
              }`}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>

          <button
            type="submit"
            onClick={() => setLogin(true)}
            className="h-11  w-full rounded bg-[#e50914] py-3 font-semibold"
          >
            Sign In
          </button>

          <div className="text-[gray]">
            New to Netflix?
            <button
              className="ml-2 text-white hover:underline"
              onClick={() => setLogin(false)}
              type="submit"
            >
              {" "}
              Sign up now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
