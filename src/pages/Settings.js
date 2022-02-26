import { Typography, Button, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import SelectField from '../components/SelectField';
import TextFieldCom from '../components/TextFieldCom';
import UseAxios from '../hooks/UseAxios';
import { useNavigate } from 'react-router'

function Settings() {

    let navigate = useNavigate();
    const { response, error, loading } = UseAxios({ url: "/api_category.php"});
    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        );
    }

    if(error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Something went wrong!
            </Typography>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/questions')
    };


    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const typeOptions = [
        { id: "multiple", name: "Multiple choice"},
        { id: "boolean", name: "True/False"}
    ];

  return (
    <div> 
     <Typography variant="h2" fontWeight="bold" color="#0962ea">Quiz App</Typography>
     <form onSubmit={handleSubmit}>
         <SelectField options={response.trivia_categories} label="Categories" />
         <SelectField options={difficultyOptions} label="Difficulty" />
         <SelectField options={typeOptions} label="Type" />
         <TextFieldCom />
         <Box mt={3} width="100%">
             <Button fullWidth variant="contained" type="submit">Get Started</Button>
         </Box>
     </form>
     </div>
  )
}

export default Settings