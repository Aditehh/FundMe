import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";





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
            if(account.providers == "github") {
                const client = await mongoose.connect()
            }
        }
    }
})

export { authOptions as GET, authOptions as POST };
