import React from 'react'

const JobCard = ({ job, onClick }) => {
    return (
      <div
        onClick={() => onClick(job)}
        className="p-4 border rounded-md shadow-md cursor-pointer hover:shadow-lg transition"
      >
        <div className="flex items-center gap-4">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-16 h-16 rounded-md"
          />
          <div>
            <h4 className="text-lg font-bold">{job.title}</h4>
            <p className="text-sm text-gray-600">{job.salary}</p>
            <p className="text-sm text-gray-500">{job.time}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm text-white bg-blue-500 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default JobCard;  