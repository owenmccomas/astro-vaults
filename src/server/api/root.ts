import { crateRouter } from "~/server/api/routers/crate.router";
import { createTRPCRouter } from "~/server/api/trpc";
import { inventoryRouter } from "./routers/inventory.router";
import { moneyRouter } from "./routers/money.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  crate: crateRouter,
  inventory: inventoryRouter,
  money: moneyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
