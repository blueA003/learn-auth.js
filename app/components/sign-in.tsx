"use client"

import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return (
    <button 
      className="bg-green-500 text-white px-4 py-2 rounded" 
      onClick={() => signIn("naver", {callbackUrl: "/admin"})}
    >
      네이버 로그인
    </button>
  );
}