import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Company {
  id: string;
  name: string;
  logo: string;
}

interface Job {
  id: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  companyId: string;
  company: Company;
}

async function getData() {
  const baseApiUrl = process.env.BASE_API_URL || "";
  const res = await fetch(baseApiUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const jobs = await getData();

  return (
    <main className="flex flex-col bg-light-grayish-cyan justify-center">
      {jobs.map((job: Job) => (
        <div
          key={job.id}
          className="flex gap-4 bg-white my-4 py-[21px] px-4 w-[728px] mx-auto rounded-md items-center">
          <div className="w-[3.625rem] h-[3.625rem] relative rounded-full">
            <Image
              src={job.company.logo}
              alt={`${job.company.name} logo`}
              fill
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-start">
              <h3 className="text-desaturated-dark-cyan font-bold">
                {job.company.name}
              </h3>
              {job.new && (
                <div className="ml-3 mr-[6px] bg-desaturated-dark-cyan text-white px-2 flex justify-center items-center rounded-l-full rounded-r-full">
                  New
                </div>
              )}
              {job.featured && (
                <div className="bg-very-dark-grayish-cyan text-white flex justify-center items-center px-2 rounded-l-full rounded-r-full">
                  Featured
                </div>
              )}
            </div>
            <div>{job.position}</div>
            <div className="flex gap-[12px] items-center text-dark-grayish-cyan">
              <div>{job.postedAt}</div>
              <div className="w-[3px] h-[3px] rounded-full bg-dark-grayish-cyan"></div>
              <div>{job.contract}</div>
              <div className="w-[3px] h-[3px] rounded-full bg-dark-grayish-cyan"></div>
              <div>{job.location}</div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
