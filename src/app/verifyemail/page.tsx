/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import axios from "axios";
import { set } from "mongoose";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);
  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);
  return (
    <div className="bg-zinc-700 flex items-center justify-center flex-col w-full min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "no Token"}
        {verified && (
          <div>
            <h2 className="text-2xl">Email Verified</h2>
            <Link href={"/login"}>Login</Link>
          </div>
        )}
        {error && (
          <div>
            <h2 className="text-2xl bg-red-500 text-black">Error</h2>
            <Link href={"/login"}>Login</Link>
          </div>
        )}
      </h2>
    </div>
  );
}
