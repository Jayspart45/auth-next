"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile({ params }: any) {
  const [data, setData] = useState({
    username: "",
    email: "",
    isAdmin: false,
  });
  const getUserDetail = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response);
    setData(response.data.data);
  };
  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div className="flex bg-zinc-700 min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-100s">Profile</h1>
      <span className="m-2 p-2 rounded bg-yellow-500">{params.id}</span>
      <h1 className="text-gray-300 text-lg">
        Name
        <span className="font-medium text-yellow-500 ml-2">
          {data.username}
        </span>
      </h1>
      <h1 className="text-gray-300 text-lg">
        Email
        <span className="font-medium text-yellow-500 ml-2">{data.email}</span>
      </h1>
      <h1 className="text-gray-300 text-lg">
        Admin
        <span className="font-medium text-yellow-500 ml-2">
          {data.isAdmin ? "Admin" : "Not Admin"}
        </span>
      </h1>
    </div>
  );
}
