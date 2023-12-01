"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      toast.success(response.data.message);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleForgotPassword = () => {
    router.push("/sendforgotpass");
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="bg-zinc-700 flex items-center justify-center flex-col w-full min-h-screen py-2">
      <Toaster />
      <h1 className="text-2xl font-bold">{loading ? "Processing" : "Login"}</h1>
      <hr />

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
      <button className="mb-4 text-yellow-600 " onClick={handleForgotPassword}>
        Forgot password
      </button>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-zinc-800 text-gray-300 border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "No Login" : "Login"}
      </button>
      <Link href={"/signup"}>Visit SigUp Page</Link>
    </div>
  );
}
