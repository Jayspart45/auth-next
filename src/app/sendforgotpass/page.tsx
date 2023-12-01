/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import axios from "axios";
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
    <div className="bg-zinc-700 flex items-center justify-center flex-col w-full min-h-screen py-2">
      <h1 className=" text-3xl text-green-600">
        Password reset send Successfully!
      </h1>
    </div>
  ) : (
    <div className="bg-zinc-700 flex items-center justify-center flex-col w-full min-h-screen py-2">
      <p className="text-gray-100 text-lg mb-4">
        Forgot your password? No worries!
      </p>
      <p className="text-gray-300 mb-8">
        Enter your email address below, and we'll send you a link to reset your
        password.
      </p>
      <label htmlFor="email" className="mb-8 text-gray-300">
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
