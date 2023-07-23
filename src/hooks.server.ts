import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/core/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { GOOGLE_ID, GOOGLE_SECRET, AUTH_SECRET } from "$env/static/private";
import prisma from "../prisma/client";

export const handle = SvelteKitAuth({
adapter:PrismaAdapter(prisma),
  providers: [Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })],
  secret:AUTH_SECRET,
  
});
