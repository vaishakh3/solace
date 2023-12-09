import clientPromise from "@/lib/db"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth, { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: "eleven"
    }),

    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
}

const handler = NextAuth(authOptions)

export const getSession = () => getServerSession(authOptions)


export { handler as GET, handler as POST }