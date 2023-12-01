/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [token, setToken] = useState("");
  const handleReset = async () => {
    const res = await axios.post("/api/users/forgotpass", {
      password: formData.password,
      token: token,
    });
    if (res.data.success) {
      router.push("/login");
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="bg-zinc-700 flex items-center justify-center flex-col w-full min-h-screen py-2">
      <div className="p-10 rounded flex flex-col bg-zinc-600">
        <h1 className="mb-8 text-gray-300 font-medium text-4xl">
          Reset Password
        </h1>
        <label className="text-gray-300 " htmlFor="password">
          Password
        </label>
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          className="mb-8 p-2 rounded"
        />
        <label className="text-gray-300 " htmlFor="confirmpassword">
          Confirm Password
        </label>
        <input
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          type="password"
          className="mb-8 p-2 rounded"
        />
        <button
          onClick={handleReset}
          className="px-4 py-2 text-gray-100 bg-zinc-800 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
