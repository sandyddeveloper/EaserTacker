import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import {  ForgotPassword, Login, Signup, VerifyEmail } from './components';
import NotFoundPage from './pages/404';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="relative dark:bg-main-dark-bg">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otp/verify" element={<VerifyEmail />} />
          <Route path="/forgot_password/" element={<ForgotPassword />} />
          <Route path="/not_found" element={<NotFoundPage />} />
        </Routes>

       
      </div>
    </Router>
  );
}

export default App;
