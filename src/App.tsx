import React from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default App;
