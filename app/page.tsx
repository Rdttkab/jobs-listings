import { fetchJobs } from "@/app/lib/data";
import Job from "@/app/ui/job";
import Image from "next/image";

export default async function Home() {
  const jobs = await fetchJobs();

  return (
    <main className="min-w-max max-h-full flex flex-col bg-light-grayish-cyan justify-center">
      <div className="hidden md:block w-full h-[9.75rem]  relative rounded-full bg-desaturated-dark-cyan mb-[4.6875rem]">
        <Image src="/bg-header-desktop.svg" alt="" fill />
      </div>
      <div className="md:hidden w-full h-[9.75rem] relative rounded-full bg-desaturated-dark-cyan mb-[4.6875rem]">
        <Image src="/bg-header-mobile.svg" alt="" fill />
      </div>
      {jobs.map((job) => (
        <Job key={job?.id} job={job} />
      ))}
    </main>
  );
}
