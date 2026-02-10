import React, { useState, useEffect } from "react";
import axios from "axios";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

function HomePage() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    axios.get("http://127.0.0.1:8000/api/jobs/")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobPosted = () => {
    fetchJobs();
  };

  return (
    <div>
      <h1>Online Job Portal</h1>
      <JobForm onJobPosted={handleJobPosted} />
      <hr />
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
