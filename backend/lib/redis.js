import Redis from "ioredis";
import dotenv from "dotenv";//code

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
