import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authconfig.js';
import { connectToDB } from './lib/utils';
import { User } from './lib/models';
import bcrypt from 'bcrypt';

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error('User not found', user);
    }
    // if (!user.isAdmin) {
    //   console.log('User is not an admin ');
    //   throw new Error('User is not an admin');
    // }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      console.log(!isPasswordCorrect);
      throw new Error('Wrong credentials!');
    }
    return user;
  } catch (err) {
    console.log(err.message);
    throw new Error('Failed to login!');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
