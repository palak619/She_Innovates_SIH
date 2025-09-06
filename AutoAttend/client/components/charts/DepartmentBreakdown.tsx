import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Engineering", value: 38 },
  { name: "Science", value: 24 },
  { name: "Arts", value: 18 },
  { name: "Business", value: 20 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--muted-foreground))",
  "hsl(var(--secondary-foreground))",
];

export default function DepartmentBreakdown() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h4 className="mb-3 text-sm font-medium text-muted-foreground">
        Attendance by Department
      </h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {data.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
