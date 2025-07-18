import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';




export const authOptions = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

        CredentialsProvider({
            name: "Domain Account",
            async authorize(credentials, req) {
                const user = {
                    /* add function to get user */
                }
                return user
            },
            credentials: {
                // domain: {
                //     label: "Domain",
                //     type: "text ",
                //     placeholder: "CORPNET",
                //     value: "CORPNET",
                // },
                username: { label: "Username", type: "text ", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === "github") {
                const client = await mongoose.connect()
                const currentUser = User.findone({ email: email })
                if (!currentUser) {
                    const newUser = new User({
                        email: email,
                        name: profile.name,
                        username: profile.login,
                        profilepic: profile.avatar_url
                    })
                    await newUser.save()
                }
            }
        }
    }
})

export { authOptions as GET, authOptions as POST };
