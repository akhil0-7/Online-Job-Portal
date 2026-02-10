import React from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";

function JobList({ jobs }) {
  const navigate = useNavigate();

  if (!jobs || jobs.length === 0) return <p>No jobs available</p>;

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onApply={() => navigate(`/apply/${job.id}`)}
        />
      ))}
    </div>
  );
}

export default JobList;
