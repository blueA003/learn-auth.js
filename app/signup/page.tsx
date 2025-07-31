"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LogIn() {
  const router = useRouter()
  const signIn = () => {
    router.push('/signin')
  }
  return (
    <div className="mx-auto w-80 py-40">
      <div className='text-center pb-4'>
        회원가입
      </div>
      <form className="flex flex-col gap-2 mx-auto">
        <input
          type="text"
          name="name"
          placeholder="이름"
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="text"
          name="username"
          placeholder="아이디"
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <button onClick={signIn} type="submit" className="cursor-pointer bg-blue-500 text-white py-2 rounded">
          회원가입
        </button>
      </form>
    </div>
  )
}
