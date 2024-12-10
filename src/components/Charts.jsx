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

function Chart({
  data,
  lines = [
    { dataKey: "steps", color: "#8884d8", name: "Steps" },
    { dataKey: "water", color: "#82ca9d", name: "Water Intake" },
    { dataKey: "sleep", color: "#ffc658", name: "Sleep Hours" },
  ],
  title = "Health Tracking Chart",
  showGrid = true,
}) {
  return (
    <div style={{ width: "100%", height: 350 }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value, name) => [value, name]} />
          <Legend />
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color}
              name={line.name}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
