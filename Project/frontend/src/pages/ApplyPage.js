import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ApplyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const submitApplication = () => {
    if (!resume) return alert("Upload resume");

    const formData = new FormData();
    formData.append("job", id);
    formData.append("applicant_name", name);
    formData.append("email", email);
    formData.append("resume", resume);

    axios.post("http://127.0.0.1:8000/api/applications/", formData)
      .then(() => { alert("Applied!"); navigate("/"); })
      .catch(err => console.log(err.response?.data));
  };

  return (
    <div className="apply-form">
      <h2>Apply for Job</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <input type="file" onChange={e => setResume(e.target.files[0])} /><br/>
      <button onClick={submitApplication}>Submit Application</button>
    </div>
  );
}

export default ApplyPage;
