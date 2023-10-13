import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { getRandomItem } from "~/utils/crateLogic";

export const slotRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  
  getCrates: publicProcedure.mutation(() => {
    function generateRandomItemListWithSelectedItem() {
      const itemList = [];
      
      // Generate 29 random items and add them to the list
      for (let i = 1; i <= 29; i++) {
        itemList.push(getRandomItem());
      }
      
      // Generate the selected item and add it to the 20th position (index 19)
      const selectedItem = getRandomItem();
      itemList.splice(19, 0, selectedItem);
      
      return {
        list: itemList,
        selectedItem,
      }
    }
    return generateRandomItemListWithSelectedItem();
  }
  
  )
});
