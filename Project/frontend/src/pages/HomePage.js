import React, { useState, useEffect } from "react";
import axios from "axios";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const fetchJobs = () => {
    const params = {};
    if (filterTitle) params.title = filterTitle;
    if (filterLocation) params.location = filterLocation;

    axios.get("http://127.0.0.1:8000/api/jobs/", { params })
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => fetchJobs(), []);

  const handleJobPosted = () => fetchJobs();

  return (
    <div>
      <h1>Online Job Portal</h1>
      <JobForm onJobPosted={handleJobPosted} />
      <hr />
      <h3>Filter Jobs</h3>
      <input placeholder="Title" value={filterTitle} onChange={e => setFilterTitle(e.target.value)} />
      <input placeholder="Location" value={filterLocation} onChange={e => setFilterLocation(e.target.value)} />
      <button onClick={fetchJobs}>Apply Filters</button>
      <hr />
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
