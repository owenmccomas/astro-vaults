import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const inventoryRouter = createTRPCRouter({
  getInventory: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ input }) => {
      db.user.findFirst({ where: { id: input.userId }, include: { inventory: true } });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
