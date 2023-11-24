"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function SignUpPage() {
  const router = useRouter();
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
      toast.error("Singup failed", error.message);
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

  return (
    <div className="bg-zinc-700 flex items-center justify-center flex-col w-full min-h-screen py-2">
      <Toaster />
      <h1 className="text-2xl font-bold">
        {loading ? "Processing" : "Sign Up"}
      </h1>
      <hr />
      <label className="text-gray-300" htmlFor="username">
        username
      </label>
      <input
        className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        value={user.username}
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        type="text"
      />
      <label className="text-gray-300" htmlFor="email">
        email
      </label>
      <input
        className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="email"
      />
      <label className="text-gray-300" htmlFor="password">
        password
      </label>
      <input
        className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
      />
      <button
        onClick={handleSignUp}
        className="px-4 py-2 bg-zinc-800 text-gray-300 border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "No SignUp" : "Sign Up"}
      </button>
      <Link href={"/login"}>Visit Login Page</Link>
    </div>
  );
}
