import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
const prisma = new PrismaClient();

export async function fetchJobs() {
  noStore();

  try {
    const jobs = await prisma.job.findMany({ include: { company: true } });

    return jobs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch jobs data.");
  }
}
