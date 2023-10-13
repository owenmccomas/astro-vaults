import { db } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const moneyRouter = createTRPCRouter({

    getUserMoney: publicProcedure
    .input(z.object({
        userId: z.string()
    }))
    .mutation(async ({ input }) => {
            
            const user = await db.user.findUnique({
                where: {
                    id: input.userId
                }
            })
    
            return user?.money
        }
    ),
    

})