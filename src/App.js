import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/auth/LoginPage';
import SignUpPage from './components/auth/SignUpPage';
import DistributorPage from './components/distributor/DistributorPage';
import ConsumerPage from './components/consumer/ConsumerPage';
import ProducerPage from './components/producer/ProducerPage';
import RetailerPage from './components/retailer/RetailerPage';
import Dashboard from './components/dashboard/Dashboard';
import ProfilePage from './components/profile/ProfilePage';
import SettingsPage from './components/settings/SettingsPage';
import AuthPage from './components/auth/AuthPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/distributor" element={<DistributorPage />} />
          <Route path="/consumer" element={<ConsumerPage />} />
          <Route path="/producer" element={<ProducerPage />} />
          <Route path="/retailer" element={<RetailerPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path='/authpage' element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
