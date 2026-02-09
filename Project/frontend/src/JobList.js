import React, { useEffect, useState } from "react";
import axios from "axios";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/jobs/")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <div key={job.id} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p><b>Location:</b> {job.location}</p>
          <p><b>Salary:</b> ₹{job.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;
