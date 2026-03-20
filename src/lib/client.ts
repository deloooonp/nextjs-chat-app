import { treaty } from "@elysiajs/eden";
import { app } from "../app/api/[[...slugs]]/route";

export const client = treaty<typeof app>(
  process.env.NEXT_PUBLIC_APPLICATION_URL || "localhost:3000",
).api;
