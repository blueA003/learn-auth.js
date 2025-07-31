"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { signIn } from "next-auth/react";
import SignIn from '../components/sign-in';

export default function LogIn() {
  const router = useRouter()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    router.push('/signup')
  }
  
  const handleLogin = async (e:React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("로그인 실패!");
    } else {
      alert("로그인 성공!");
      router.push("/admin");
    }

  };

  return (
    <div className="mx-auto w-80 py-40">
      <div className='text-center pb-4'>
        로그인
      </div>
      <form className="flex flex-col gap-2 mx-auto" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <button type="submit" className="cursor-pointer bg-blue-500 text-white py-2 rounded">
          로그인
        </button>
      </form>
      <div onClick={signUp} className="cursor-pointer pt-2">
        회원가입
      </div>
      <div className="text-center py-2">
        간편 로그인
      </div>
      <SignIn></SignIn>
    </div>
  )
}
