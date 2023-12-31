import { crateRouter } from "~/server/api/routers/crate.router";
import { createTRPCRouter } from "~/server/api/trpc";
import { inventoryRouter } from "./routers/inventory.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  crate: crateRouter,
  inventory: inventoryRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
