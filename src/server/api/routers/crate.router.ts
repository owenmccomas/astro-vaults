import { z } from "zod";
import { TempItem } from "~/utils/crateLogic";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { getRandomItem } from "~/utils/crateLogic";
import { db } from "~/server/db";
import { ItemRarity } from "@prisma/client";

export const crateRouter = createTRPCRouter({

  getCrate: publicProcedure
  .mutation( ()=>{
    const item = getRandomItem();
    return {item }
  }
  ),

  keepCrate: publicProcedure
  .input(z.object({
    item: z.object({
      name: z.string(),
    rarity: z.string(),
    image: z.string().optional(),
    description: z.string(),
    value: z.number(),
    }),
    userId: z.string()
  }))
  .mutation(async ({ input }) => {

    const item = input.item
    
    return await db.item.create({
      data: {
        name: item.name,
        rarity: item.rarity as ItemRarity,
        image: item.image,
        description: item.description,
        value: item.value,
        user: {
          connect: {
            id: input.userId
          }
      }
      }
    })

  }),

});
