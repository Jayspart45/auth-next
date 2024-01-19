"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import img1 from "@/assets/wave.png";

export default function SignUpPage() {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp Success", response.data);
      toast.success("SignUp Success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.response.data.error);

      toast.error("Singup failed : " + error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const handlePassword = () => {
    setTogglePassword((state) => !state);
  };

  return (
    <div className="backdrop-blur-sm  bg-zinc-100 font-Poppins flex flex-col md:flex-row items-center justify-center  w-full min-h-screen ">
      <Toaster />
      <div className="w-full md:w-1/2 text-purple-100 md:p-10 space-y-5 h-screen bg-color1 flex justify-center items-center flex-col">
        <h1 className="md:flex items-center md:text-5xl lg:text-6xl text-3xl font-bold ">
          Welcome to Title
          <span>
            <Image src={img1} className="w-8 md:w-14 ml-2" alt="logo" />
          </span>
        </h1>
        <p className="leading-relaxed text-sm md:text-lg p-5 md:p-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          sed saepe non, tempora est, praesentium ullam mollitia tempore vero
          rem nulla sunt amet nisi delectus neque labore obcaecati fugiat.
          Nostrum.
        </p>
      </div>
      <div className="w-full md:w-1/2 h-screen space-y-5 md:space-y-10  flex flex-col justify-center items-center">
        <h1 className="flex items-center md:text-4xl  text-2xl  text-color3 font-bold">
          {loading ? "Processing" : "SignUp"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </h1>

        <input
          className="outline-none p-2 w-[15rem] md:w-full max-w-sm  border border-gray-300 rounded mb-4 focus:outline-none "
          id="username"
          value={user.username}
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          type="username"
        />
        <input
          className="outline-none p-2 w-[15rem] md:w-full max-w-sm  border border-gray-300 rounded mb-4 focus:outline-none "
          id="email"
          value={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
        />

        <div className="bg-white space-x-2 px-2 flex items-center rounded outline-none  w-[15rem] md:w-full max-w-sm  border border-gray-300">
          <input
            className="outline-none p-2  md:w-full max-w-sm  focus:outline-none "
            id="password"
            value={user.password}
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type={togglePassword ? "password" : "text"}
          />

          {togglePassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={handlePassword}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={handlePassword}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
        </div>
        <button
          onClick={handleSignUp}
          className="px-4 py-2 bg-color3 text-gray-300 border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
        >
          {buttonDisabled ? "No SignUp" : "SingUp"}
        </button>

        <div className="flex flex-col md:flex-row md:space-x-10 px-2">
          <Link href={"/login"}>Visit Login Page</Link>
        </div>
      </div>
    </div>
  );
}
