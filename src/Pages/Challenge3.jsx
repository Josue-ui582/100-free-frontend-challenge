import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import JobCard from '../Components/JobCard';
import JobDetails from '../Components/JobDetails';
import { Jobs } from '../data/Jobs';

const Challenge3 = () => {
    const [jobs, setJobs] = useState(Jobs);
    const [selectedJobId, setSelectedJobId] = useState(null);

    const handleJobClick = (jobId) => {
        setSelectedJobId((prevJobId) => (prevJobId === jobId ? null : jobId));
    };

    const handleSearch = (query, location) => {
        const filteredJobs = Jobs.filter((job) => {
            const matchesTitle = job.title.toLowerCase().includes(query.toLowerCase());
            const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
            return matchesTitle && matchesLocation;
        });
        setJobs(filteredJobs);
    };

    return (
        <main className='flex flex-col justify-center items-center'>
            <div className='md:w-3/4 w-98 auto min-h-screen'>
                <h1 className='sm:text-2xl text-xl sm:font-bold font-semibold mb-4'>Job Board</h1>
                <SearchBar onSearch={handleSearch} />
                <div className="md:flex flex-wrap gap-4 mt-6 reative">
                    {jobs.map((job) => (
                        <div key={job.id} className="w-full md:w-1/2 lg:w-1/3">
                            <JobCard job={job} onClick={() => handleJobClick(job.id)} />
                            {selectedJobId === job.id && (
                                <div className="mt-2 bg-gray-100 p-4 absolute bg-white z-100 bg-gray-500 rounded-md">
                                    <JobDetails job={job} onClose={() => setSelectedJobId(null)} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Challenge3;