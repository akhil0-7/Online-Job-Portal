import React from "react";

function JobCard({ job, onApply }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <button onClick={onApply}>Apply</button>
    </div>
  );
}

export default JobCard;
