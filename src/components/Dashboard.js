import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, updateJob, deleteJob } from '../redux/jobSlice';
import { Button, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


function Dashboard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();
  const handleEditJob = (jobId) => {
    // Logic for editing the job
    console.log("Editing job with ID:", jobId);
  };
  

  const handleAddOrUpdateJob = () => {
    if (editingId) {
      dispatch(updateJob({ id: editingId, title, description }));
      setEditingId(null);
    } else {
      dispatch(addJob({ id: Date.now(), title, description }));
    }
    setTitle('');
    setDescription('');
  };

  return (
    <div className="dashboard-container">
      <h2>Job Postings Dashboard</h2>
      <div className="job-form">
        <TextField label="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={4} />
        <Button variant="contained" color="primary" onClick={handleAddOrUpdateJob}>
          {editingId ? "Update Job" : "Add Job"}
        </Button>
      </div>

      <List className="job-list">
        {jobs.map((job) => (
          <ListItem key={job.id} className="job-listing">
            <ListItemText primary={job.title} secondary={job.description} />
            <Link to={`/jobs/${job.id}`} className="job-details-link">View Candidates</Link>
            <IconButton onClick={() => handleEditJob(job)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => dispatch(deleteJob(job.id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Dashboard;
