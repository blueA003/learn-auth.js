import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver";
import Credentials from "next-auth/providers/credentials"
// import { saltAndHashPassword } from "@/utils/password"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        username: { label: "아이디", type: "text", placeholder: "아이디 입력"},
        password: { label: "비밀번호", type: "password", placeholder: "비밀번호 입력"},
      },
      authorize: async (credentials) => {
        const {username, password} = credentials ?? {};

        if (username === "admin" && password === "1234") {
          return {
            id: "1",
            name: "관리자",
            role: "admin",
            email: "1234"
          };
        }

        return null;
      },
      // authorize: async (credentials) => {
      //   let user = null

      //   const pwHash = saltAndHashPassword(credentials.password)

      //   user = await getUserFromDb(credentials.username, pwHash)

      //   if (!user) {
      //     throw new Error("Invalid credentials.") 
      //   }
      //   return user
      // ,}
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user}) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },
    session({ session, token}) {
      session.user.id = token.id as string;
      session.user.name = token.name as string;
      session.user.email = token.email as string;
      session.user.role = token.role as string;
      session.user.email = token.email as string;
      return session;
    },
  },
});