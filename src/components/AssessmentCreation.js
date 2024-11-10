import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssessment } from '../redux/jobSlice';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';

function AssessmentCreation() {
  const [selectedJob, setSelectedJob] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState([]);

  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const handleAddQuestion = () => {
    setQuestions([...questions, { question, answer }]);
    setQuestion('');
    setAnswer('');
  };

  const handleSaveAssessment = () => {
    dispatch(addAssessment({ jobId: selectedJob, questions }));
    setQuestions([]);
  };

  return (
    <div className="assessment-container">
      <Typography variant="h4">Create Assessment</Typography>
      <FormControl fullWidth>
        <InputLabel>Select Job</InputLabel>
        <Select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
          {jobs.map((job) => (
            <MenuItem key={job.id} value={job.id}>{job.title}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField label="Question" fullWidth value={question} onChange={(e) => setQuestion(e.target.value)} />
      <TextField label="Answer" fullWidth value={answer} onChange={(e) => setAnswer(e.target.value)} />

      <Button variant="contained" onClick={handleAddQuestion}>Add Question</Button>
      <Button variant="contained" color="primary" onClick={handleSaveAssessment}>Save Assessment</Button>

      <div>
        <Typography variant="h6">Questions:</Typography>
        {questions.map((q, index) => (
          <p key={index}>{index + 1}. {q.question} - {q.answer}</p>
        ))}
      </div>
    </div>
  );
}

export default AssessmentCreation;
