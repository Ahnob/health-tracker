import { useState } from "react";

function GoalForm({ onSetGoals }) {
  const [goalSteps, setGoalSteps] = useState(0);
  const [goalWater, setGoalWater] = useState(0);
  const [goalSleep, setGoalSleep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetGoals({ goalSteps, goalWater, goalSleep });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Goal: Steps Walked:
        <input
          type="number"
          value={goalSteps}
          onChange={(e) => setGoalSteps(e.target.value)}
        />
      </label>
      <label>
        Goal: Water Intake (ml):
        <input
          type="number"
          value={goalWater}
          onChange={(e) => setGoalWater(e.target.value)}
        />
      </label>
      <label>
        Goal: Hours of Sleep:
        <input
          type="number"
          value={goalSleep}
          onChange={(e) => setGoalSleep(e.target.value)}
        />
      </label>
      <button type="submit">Set Goals</button>
    </form>
  );
}

export default GoalForm;
