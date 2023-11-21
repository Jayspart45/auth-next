import React from "react";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex bg-zinc-700 min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl">Profile</h1>
      <p className="text-4xl ">
        Profile Page
        <span className="m-2 p-2 rounded bg-yellow-500">{params.id}</span>
      </p>
    </div>
  );
}
