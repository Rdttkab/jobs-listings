import { Company, Job } from "@prisma/client";
import Image from "next/image";
import React from "react";

type JB = Job & {
  company: Company;
};

const Job = ({ job }: { job: JB }) => {
  return (
    <div
      key={job?.id}
      className="flex flex-col sm:flex-row sm:items-center sm:gap-4 bg-white mx-6 sm:mx-auto my-4 py-[21px] pr-5 pl-6 sm:px-4 sm:w-[728px] rounded-md shadow-xl border-l-4 border-desaturated-dark-cyan">
      <div className="w-[3.625rem] h-[3.625rem] relative rounded-full">
        <Image src={job.company.logo} alt={`${job.company.name} logo`} fill />
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
        <div className="mt-4">{job.position}</div>
        <div className="flex gap-[12px] items-center text-dark-grayish-cyan mt-5">
          <div>{job.postedAt.toDateString()}</div>
          <div className="w-[3px] h-[3px] rounded-full bg-dark-grayish-cyan"></div>
          <div>{job.contract}</div>
          <div className="w-[3px] h-[3px] rounded-full bg-dark-grayish-cyan"></div>
          <div>{job.location}</div>
        </div>
      </div>

      <hr className="sm:hidden border border-solid border-dark-grayish-cyan my-5" />

      <div className="flex sm:ml-auto gap-4">
        <div className="p-[10px] bg-light-grayish-cyan text-desaturated-dark-cyan rounded">
          {job.role}
        </div>
        <div className="p-[10px] bg-light-grayish-cyan text-desaturated-dark-cyan rounded">
          {job.level}
        </div>
        {job.languages.map((lang) => (
          <div
            key={lang}
            className="p-[10px] bg-light-grayish-cyan text-desaturated-dark-cyan rounded">
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
