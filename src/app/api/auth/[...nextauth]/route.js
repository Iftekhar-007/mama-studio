// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       const isAllowedToSignIn = true;
//       if (isAllowedToSignIn) {
//         return true;
//       } else {
//         // Return false to display a default error message
//         return false;
//         // Or you can return a URL to redirect to:
//         // return '/unauthorized'
//       }
//     },

//     async jwt({ token, account, profile }) {
//       // Persist the OAuth access_token and or the user id to the token right after signin
//       if (account) {
//         token.accessToken = account.access_token;
//         token.id = profile.id;
//       }
//       return token;
//     },

//     async session({ session, token, user }) {
//       // Send properties to the client, like an access_token and user id from a provider.
//       session.accessToken = token.accessToken;
//       session.user.id = token.id;

//       return session;
//     },
//   },
// });

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
