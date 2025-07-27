import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import PatientPIPage from './pages/PatientPIPage';
import StudyInfoPage from './pages/StudyInfoPage';
import ExamInfoPage from './pages/ExamInfoPage';
import CTScanInfoPage from './pages/CTScanInfoPage';
import PETScanInfoPage from './pages/PETScanInfoPage';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<PatientPIPage />} />
          <Route path="/study-info" element={<StudyInfoPage />} />
          <Route path="/exam-info" element={<ExamInfoPage />} />
          <Route path="/ct-scan-info" element={<CTScanInfoPage />} />
          <Route path="/pet-scan-info" element={<PETScanInfoPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
