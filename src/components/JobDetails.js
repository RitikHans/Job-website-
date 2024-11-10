import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function JobDetails() {
  const { jobId } = useParams();
  const job = useSelector((state) => state.jobs.jobs.find((job) => job.id === parseInt(jobId)));
  const candidates = useSelector((state) => state.jobs.candidates[jobId] || []);

  if (!job) return <Typography>Job not found</Typography>;

  return (
    <div className="job-details-container">
      <Typography variant="h4">{job.title} - Candidate Details</Typography>
      <List>
        {candidates.map((candidate) => (
          <ListItem key={candidate.id}>
            <ListItemText primary={candidate.name} secondary={`Status: ${candidate.status}`} />
            <a href={candidate.resumeLink} target="_blank" rel="noopener noreferrer" className="resume-link">View Resume</a>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default JobDetails;
