"use client"
import { useSession } from "next-auth/react"
 
export default function Dashboard() {
  const { data: session } = useSession() 

  return (
    <div>
      <h1>로그인 결과</h1>
      <p>이름: {session?.user?.name}</p>
      <p>아이디: {session?.user?.role}</p>
      <p>비밀번호: {session?.user?.email}</p>
      <p>id: {session?.user?.id}</p>
    </div>
  )
}