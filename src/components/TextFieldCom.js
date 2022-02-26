import { Box } from '@mui/system'
import React from 'react'
import { FormControl, TextField } from '@mui/material'
import { useDispatch } from 'react-redux';
import {handleNumberChange} from '../redux/action'


function TextFieldCom() {
    
const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(handleNumberChange(e.target.value));

    }
  return (
   <Box mt={3} width="100%">

       <FormControl fullWidth size="small">
           <TextField
           onChange={handleChange} 
               variant="outlined"
               label="Number of Questions(30 maximum)"
               InputProps={{ inputProps: { min: "0", max: "30", step: "1" } }}
               type="number"
               size="small"
               color="primary"
           />
       </FormControl>
   </Box>
  )
}

export default TextFieldCom