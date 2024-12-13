// src/components/controls.tsx
import React, { useState } from 'react';
import styles from './controls.module.scss';

interface ControlsProps {
  updateScore: (type: 'runs' | 'wickets' | 'overs', value: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ updateScore }) => {
  const [specialScenario, setSpecialScenario] = useState('');

  const handleSpecialScenario = () => {
    if (specialScenario) {
      alert(`Special scenario: ${specialScenario}`); // Log or handle special cases
      setSpecialScenario('');
    }
  };

  return (
    <div className={styles.controls}>
      <h3>Update Score</h3>
      <div className={styles.actions}>
        <h4>Runs</h4>
        {[...Array(7)].map((_, i) => (
          <button key={i} onClick={() => updateScore('runs', i)}>
            {i}
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <h4>Extras</h4>
        <button onClick={() => updateScore('runs', 1)}>WD (Wide Ball)</button>
        <button onClick={() => updateScore('runs', 1)}>NB (No Ball)</button>
      </div>

      <div className={styles.actions}>
        <h4>Wicket</h4>
        <button onClick={() => updateScore('wickets', 1)}>Wicket</button>
      </div>

      <div className={styles.special}>
        <h4>Special</h4>
        <input
          type="text"
          placeholder="Enter special scenario"
          value={specialScenario}
          onChange={(e) => setSpecialScenario(e.target.value)}
        />
        <button onClick={handleSpecialScenario}>Submit</button>
      </div>

      <div className={styles.actions}>
        <h4>Ball Progression</h4>
        <button onClick={() => updateScore('overs', 0.1)}>Add Ball</button>
      </div>
    </div>
  );
};

export default Controls;
