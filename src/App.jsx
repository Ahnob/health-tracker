import { useState } from "react";
import Header from "./components/Header.jsx";
import Tracker from "./components/Tracker.jsx";
import Chart from "./components/Charts.jsx";
import GoalForm from "./components/GoalForm.jsx";
import "./App.css"
function App() {
  const [data, setData] = useState([]);
  const [goals, setGoals] = useState({ steps: 0, water: 0, sleep: 0 });

  const handleTrackData = (newData) => {
    setData([...data, { ...newData, date: new Date().toLocaleDateString() }]);
  };

  const handleSetGoals = (newGoals) => {
    setGoals(newGoals);
  };

  return (
    <div>
      <Header />
      <GoalForm onSetGoals={handleSetGoals} />
      <Tracker onTrack={handleTrackData} />
      <Chart data={data} />
      <div>
        <h3>Your Goals</h3>
        <p>Steps Goal: {goals.steps}</p>
        <p>Water Goal: {goals.water} ml</p>
        <p>Sleep Goal: {goals.sleep} hours</p>
      </div>
    </div>
  );
}

export default App;
