"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function ProfilePage() {
  const [data, setData] = useState({
    _id: "",
  });
  const router = useRouter();
  const handleLogout = async () => {
    await axios.get("/api/users/logout");
    toast.success("Logout Succesfully");

    try {
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
    router.push("/login");
  };
  const getUserDetail = async () => {
    const response = await axios.get("api/users/me");
    setData(response.data.data);
  };
  return (
    <div className="flex bg-zinc-700 min-h-screen flex-col items-center justify-center">
      <Toaster />
      <h1 className="text-2xl">Profile</h1>
      <h2 className="text-yellow-500 bg-zinc-600 p-2 rounded my-4">
        {data._id ? (
          <Link href={`/profile/${data._id}`}>{data._id}</Link>
        ) : (
          "Fetch Data"
        )}
      </h2>
      <button
        className="px-4 py-2 bg-zinc-800 text-gray-300 border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
        onClick={getUserDetail}
      >
        Show My Data
      </button>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-zinc-800 text-gray-300 border-gray-300 rounded mb-4 focus:outline-none focus:border-gray-600"
      >
        Logout
      </button>
    </div>
  );
}
