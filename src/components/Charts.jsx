import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="steps" stroke="#8884d8" />
        <Line type="monotone" dataKey="water" stroke="#82ca9d" />
        <Line type="monotone" dataKey="sleep" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
