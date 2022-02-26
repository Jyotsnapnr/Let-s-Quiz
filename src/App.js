import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings';
import './App.css';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import NotFound from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
      <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Routes>
          <Route exact path="/" element={<Settings />}>
          </Route>
        
          <Route path="/questions" element={<Questions />}>
          </Route>
          <Route path="/score" element={<FinalScreen />}>
            
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </Box>
        </Container>
      </BrowserRouter>

  );
}

export default App;
