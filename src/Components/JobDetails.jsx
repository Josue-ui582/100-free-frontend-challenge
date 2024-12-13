import React from 'react';
import { IoMdClose } from "react-icons/io";

const JobDetails = ({ job, onClose }) => {
  if (!job) {
    return (
      <div className="p-4 text-gray-500 flex justify-center items-center border rounded-md hidden md:block">
        Select a job to view details
      </div>
    );
  }

  return (
    <div className="p-6 shadow-md relative w-full">
      <IoMdClose 
        className='absolute top-4 right-4 text-2xl cursor-pointer' 
        onClick={onClose} 
      />
      <img src={job.logo} alt={`${job.company} logo`} className="w-24 h-24" />
      <h3 className="mt-4 text-xl font-bold text-white">{job.title}</h3>
      <p className="mt-2 text-gray-500 text-white">{job.applicants} Applicants</p>
      <p className="mt-4 text-white">{job.description}</p>
      <h4 className="mt-6 text-lg font-semibold text-white">Skills</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm text-white bg-green-500 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-6 text-lg font-bold text-gray-700 text-zinc-400">
        Based salary: {job.salary} / {job.location}
      </p>
      <button className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;