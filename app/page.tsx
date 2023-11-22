import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchJobs } from "@/app/lib/data";
import Job from "@/app/ui/job";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const jobs = await fetchJobs();
  // console.log("🚀 ~ file: page.tsx:41 ~ Home ~ jobs:", jobs);

  return (
    <main className="flex flex-col bg-light-grayish-cyan justify-center">
      {jobs.map((job) => (
        <Job key={job?.id} job={job} />
      ))}
    </main>
  );
}
