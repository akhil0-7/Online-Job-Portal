import React, { useState } from "react";
import axios from "axios";

function JobForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const submitJob = () => {
    axios.post("http://127.0.0.1:8000/api/jobs/", {
      title: title,
      description: desc,
      location: location,
      salary: Number(salary)   // ✅ convert to number
    })
    .then(res => {
      alert("Job Posted Successfully!");
      setTitle("");
      setDesc("");
      setLocation("");
      setSalary("");
    })
    .catch(err => {
      console.log(err.response.data); // see backend error
      alert("Error posting job");
    });
  };

  return (
    <div>
      <h2>Post Job</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br/>
      <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} /><br/>
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} /><br/>
      <input placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} /><br/>
      <button onClick={submitJob}>Post Job</button>
    </div>
  );
}

export default JobForm;
