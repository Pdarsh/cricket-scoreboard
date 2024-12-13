'use client';

import { useState } from 'react';
import Scoreboard from '../components/score-board/score-board';

export default function Home() {
  const [score, setScore] = useState({ runs: 120, wickets: 3, overs: 14.2 });

  return (
    <div>
      <Scoreboard teamName="Team A" score={score} target={200} />
    </div>
  );
}
