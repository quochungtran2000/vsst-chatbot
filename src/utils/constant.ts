import { getEnv } from "./helpers";

export const PORT = getEnv("PORT");
export const VERIFY_TOKEN = getEnv("VERIFY_TOKEN");
export const PAGE_ACCESS_TOKEN = getEnv("PAGE_ACCESS_TOKEN");
