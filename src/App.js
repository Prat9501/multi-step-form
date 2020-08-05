import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import SignupForm from './components/SignupForm/SignupForm';

export default function App() {
  return (
    <Router>
    <div className="app">
      <SignupForm />
    </div>
    </Router>
  );
}