import { useState } from "react";

function Tracker({ onTrack }) {
  const [steps, setSteps] = useState(0);
  const [water, setWater] = useState(0);
  const [sleep, setSleep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTrack({ steps, water, sleep });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Steps Walked:
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
      </label>
      <label>
        Water Intake (ml):
        <input
          type="number"
          value={water}
          onChange={(e) => setWater(e.target.value)}
        />
      </label>
      <label>
        Hours of Sleep:
        <input
          type="number"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
        />
      </label>
      <button
        className="
      btn"
        type="submit"
      >
        Track
      </button>
    </form>
  );
}

export default Tracker;
