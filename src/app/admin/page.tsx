/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
export default function Admin() {
  const router = useRouter();

  const { isAdmin } = useContext(AuthContext);

  return isAdmin ? <div>admin</div> : <>No Access</>;
}
