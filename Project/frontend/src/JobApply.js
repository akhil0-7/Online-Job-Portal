import React, { useState } from "react";
import axios from "axios";

function JobApply({ jobId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const submitApplication = () => {
    if (!resume) {
      alert("Please upload a resume");
      return;
    }

    const formData = new FormData();
    formData.append("job", jobId);
    formData.append("applicant_name", name);
    formData.append("email", email);
    formData.append("resume", resume);

    axios.post("http://127.0.0.1:8000/api/applications/", formData)
      .then(res => {
        alert("Application submitted successfully!");
        setName("");
        setEmail("");
        setResume(null);
      })
      .catch(err => console.log(err.response.data));
  };

  return (
    <div style={{border:"1px solid #ccc", padding:"10px", marginTop:"10px"}}>
      <h4>Apply for this job</h4>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input type="file" onChange={e=>setResume(e.target.files[0])} /><br/>
      <button onClick={submitApplication}>Submit Application</button>
    </div>
  );
}

export default JobApply;
