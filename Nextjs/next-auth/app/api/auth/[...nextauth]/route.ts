import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

let ID = 1;
const USERS: {id:string, email: string, password: string}[] = [];

const handler = NextAuth({
    providers: [CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: {label: "Username", type: "text", placeholder:"johndoe"},
            password: {label: "Password", type: "password", placeholder:"Enter your password"}
        },
        async authorize(credentials, req) {
            const user = {id: "1", name: "Johndoe",username: "jd@gmail.com"}

            const username = credentials?.username;
            const password = credentials?.password;

            if(!username || !password) return null;

            const existingUser = USERS.find(u => u.email === username);
            if(existingUser) {
                if(existingUser.password == password){
                    return existingUser;
                }
                else {
                    return null;
                }
            }

            USERS.push({
                id: ID.toString(),
                email: username,
                password: password
            })
            ID++;

            return user;
        }

    })]
})

export { handler as GET, handler as POST};