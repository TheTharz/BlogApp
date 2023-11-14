import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
