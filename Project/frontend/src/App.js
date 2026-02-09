import React from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

function App() {
  return (
    <div>
      <h1>Online Job Portal</h1>
      <JobForm />
      <hr />
      <JobList />
    </div>
  );
}

export default App;
