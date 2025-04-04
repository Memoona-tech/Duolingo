import "dotenv/config";
import type {Config} from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql", // I replaced "driver" : "pg"
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
} satisfies Config;



