/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function page() {
  const [email, setEmail] = useState("");
  const [success, setSucess] = useState(false);
  const sendEmail = async () => {
    console.log("Sending email");
    const response = await axios.post("/api/users/sendforgotpass", { email });
    setSucess(true);
    console.log(response);
  };
  return success ? (
    <div className="max-w-7xl p-5 mx-auto font-Poppins flex items-center justify-center flex-col w-full min-h-screen py-2">
      <h1 className="md:flex items-center  text-3xl font-semibold text-zinc-100">
        Password reset send Successfully!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 ml-2 animate-pulse text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      </h1>
      <p className="text-lg text-zinc-200 mt-4">
        Thank you for initiating the password reset process. An email has been
        sent to your registered email address with further instructions. Please
        check your inbox and follow the steps to complete the password reset.
      </p>
      <p className="text-md text-zinc-200 mt-4">
        If you haven't received the email within a few minutes, please check
        your spam folder. If the issue persists, contact our support team at
        support@example.com.
      </p>
      <Link
        href="/login"
        className="bg-color2 text-white py-2 px-4 mt-4 rounded-md hover:bg-color3"
      >
        Go to Homepage
      </Link>
    </div>
  ) : (
    <div className="p-5 bg-color1 font-Poppins flex items-center justify-center flex-col w-full min-h-screen py-2">
      <p className="font-bold text-gray-100 text-2xl md:text-4xl mb-4">
        Forgot your password? No worries!
      </p>
      <p className="text-color3 mb-8">
        Enter your email address below, and we'll send you a link to reset your
        password.
      </p>
      <label htmlFor="email" className="mb-8 text-color3">
        Email
      </label>

      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="outline-none p-2 rounded mb-4"
      />

      <button
        disabled={email.length <= 0}
        onClick={sendEmail}
        className="px-4 py-2 bg-zinc-800 text-gray-100 rounded"
      >
        Send me Email
      </button>
    </div>
  );
}
