// src/components/score-board.tsx
import React from 'react';
import styles from './score-board.module.scss';

interface ScoreBoardProps {
  teamName: string;
  score: {
    runs: number;
    wickets: number;
    overs: number;
  };
  target?: number; // Optional target runs
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ teamName, score, target }) => {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.teamSection}>
        <span className={styles.teamName}>{teamName}</span>
        {target && <span className={styles.target}>Target: {target}</span>}
      </div>
      <div className={styles.scoreSection}>
        <span className={styles.runs}>{score.runs}/{score.wickets}</span>
        <span className={styles.overs}>Overs: {score.overs.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
