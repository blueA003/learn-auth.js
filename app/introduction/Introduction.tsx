"use client"

import { useRouter } from "next/navigation"

export default function Introduction() {
  const router = useRouter()
  const signUp = () => {
    router.push('/signup')
  }
  const signIn = () => {
    router.push('/signin')
  }
  return (
    <div className="mx-auto w-20">
      <div className="flex flex-col gap-2 mx-auto">
        <div className="border py-1 rounded">
          <div className="flex justify-center items-center cursor-pointer" onClick={signIn}>
            로그인
          </div>
        </div>
        <div className="border py-1 rounded">
          <div className="flex justify-center items-center cursor-pointer" onClick={signUp}>
            회원가입
          </div>
        </div>
      </div>
    </div>
  )
}
