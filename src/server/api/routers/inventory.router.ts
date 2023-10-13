import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const inventoryRouter = createTRPCRouter({
  getInventory: publicProcedure
   .input(
      z.object({
        id: z.string(),
      })
    )
   .query(async ({ input }) => {
      const inventory = await db.user.findUnique({
        where: { id: input.id },
        select: {
          items: true,
        },
        
      })

      if (!inventory) {
        throw new Error("Inventory not found");
      }

      return inventory;
    }
  ),

});
