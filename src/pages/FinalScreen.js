import React from 'react'
import { Box } from '@mui/system';
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import {  useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleScoreChange,handleNumberChange} from "../redux/action";

function FinalScreen() {
  const {score} = useSelector(state =>state);
  const dispatch = useDispatch();
let navigate = useNavigate();

  const handleClick = () => {
dispatch(handleScoreChange(0));
dispatch(handleNumberChange(30));
navigate('/');
  }
  return (
    <Box mt={30}>

      <Typography variant="h3" fontWeight="bold" mb={3} color="blue">Final Score {score}</Typography>
      <Button onClick={handleClick} variant="contained">Go Back</Button>
    </Box>
  )
}

export default FinalScreen