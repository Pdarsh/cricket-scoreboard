// src/app/controls/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Controls from '../../components/controls/controls';
import styles from '../../components/controls/controls.module.scss';

export default function ControlsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with real auth logic
  const router = useRouter();
  const [score, setScore] = useState({ runs: 120, wickets: 3, overs: 14.2 });

  const updateScore = (type: 'runs' | 'wickets' | 'overs', value: number) => {
    setScore((prev) => ({
      ...prev,
      [type]: prev[type] + value,
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.authContainer}>
        <h2>Restricted Access</h2>
        <button onClick={() => setIsAuthenticated(true)} className={styles.loginButton}>
          Log In
        </button>
      </div>
    );
  }

  return (
    <div className={styles.controlsContainer}>
      <h1>Controls</h1>
      <Controls updateScore={updateScore} />
      <button onClick={() => router.push('/')} className={styles.backButton}>
        Back to Scoreboard
      </button>
    </div>
  );
}
