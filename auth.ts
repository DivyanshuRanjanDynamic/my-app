import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "./lib/db";
import authConfig from "./auth.config";
import { getAccountByUserId, getUserById } from "@/features/auth/action/index";

// Test database connection
async function testDatabaseConnection() {
  try {
    await db.$connect();
    console.log("✅ Database connection successful");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}

// Test the connection on startup
testDatabaseConnection();

 export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks : {
          // hamdle user creation and account linking after a sucessful
          async signIn({ user , account , profile }) {

            if(!user || !account) return false ;

            // Check if the user already exists
            const existingUser = await db.user.findUnique({
                where : { email : user.email!}
            });


            if(!existingUser){
                const newUser = await db.user.create ({
                 data :  {
                    name :user.name,
                    email :user.email!,
                    image : user.image,


                    accounts : {
                                                 /*  
                                                    //@ts-ignore is used to tell TypeScript: ignore type-checking for the next line.  
                                                     It’s used here likely because TypeScript complains about the accounts.create structure
                                                     not matching the expected type, but you’re forcing it to pass.

                                                   we can also use the safer method to fix this by iporting "Account" from the nest-auth
                                                     import type { Account } from "next-auth";
                                                     */

                       // @ts-ignore 
                       create :{
                            type              :account.type,
                            provider          :account.provider,
                            providerAccountId :account.providerAccountId,
                            refresh_token     :account.refresh_token,
                            access_token      :account.access_token,
                            expires_at        :account.expires_at,
                            token_type        :account.token_type,
                            scope             :account.scope,
                            id_token          :account.id_token,
                            session_state     :account.session_state,
                        },
                    }
                 }
                })
            
                if(!newUser) return false;
               }   // Return false if user creation fails
                else 
                {
                     // Link the account if user exists
                     const existingAccount = await db.account.findUnique({
                        where: {
                          provider_providerAccountId: {
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                          },
                        },
                      });


                   // if the account not exist ,create it 
                      if (!existingAccount) 
                        {
                        await db.account.create
                        ({
                          data:
                           {
                            userId: existingUser.id,
                            type: account.type,
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                            refresh_token: account.refresh_token,
                            access_token: account.access_token,
                            expires_at: account.expires_at,
                            token_type: account.token_type,
                            scope: account.scope,
                            id_token: account.id_token,
                            // @ts-ignore
                            session_state: account.session_state,
                          },
                        });
                      }
                    }
                      return true ;
                },

                async jwt({ token, user, account }) {
                    if(!token.sub) return token;
                    const existingUser = await getUserById(token.sub)
              
                    if(!existingUser) return token;
              
                    const exisitingAccount = await getAccountByUserId(existingUser.id);
              
                    token.name = existingUser.name;
                    token.email = existingUser.email;
                    token.role = existingUser.role;
              
                    return token;
                  },

                  async session({ session, token }) {
                    // Attach the user ID from the token to the session
                  if(token.sub  && session.user){
                    session.user.id = token.sub
                  } 
              
                  if(token.sub && session.user){
                    session.user.role = token.role
                  }
              
                  return session;
                  },
    },

    secret: process.env.AUTH_SECRET,
    adapter: PrismaAdapter(db),
    session : {strategy : "jwt"},
    ...authConfig

  });