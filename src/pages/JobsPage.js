import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, deleteJob, updateJob } from '../redux/jobSlice';

function JobsPage() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const handleAddJob = () => { /* add job function */ };
  const handleDeleteJob = (id) => { /* delete job function */ };

  return (
    <div>
      <h2>Job Postings</h2>
      <button onClick={handleAddJob}>Add Job</button>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title}
            <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsPage;
