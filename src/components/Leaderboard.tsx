import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addScore, selectScores } from '../features/scoresSlice';
import { FaPlus } from 'react-icons/fa';
import './Leaderboard.css'; // or './LeaderboardStocks.css'

const Leaderboard: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');

  const scores = useSelector(selectScores);
  const dispatch = useDispatch();

  const handleAddScore = () => {
    dispatch(addScore({ username, score }));
    setPopupOpen(false);
    setUsername('');
    setScore('');
  };

  return (
    <div className="Leaderboard">
      <h1 className="leaderboard-header">Leaderboard</h1>
      <ul>
        {scores.slice(0, 10).map((item, index) => (
          <li key={index} className="leaderboard-item">
            <div className="leaderboard-item-name">{item.username}</div>
            <div className="leaderboard-item-score">{item.score}</div>
          </li>
        ))}
      </ul>
      <button onClick={() => setPopupOpen(true)}>
        <FaPlus /> Add Score
      </button>
      {isPopupOpen && (
        <div className="add-score-popup">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="number"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <button onClick={handleAddScore}>Add Score</button>
          <button onClick={() => setPopupOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
