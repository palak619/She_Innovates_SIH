import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", rate: 92 },
  { day: "Tue", rate: 94 },
  { day: "Wed", rate: 90 },
  { day: "Thu", rate: 96 },
  { day: "Fri", rate: 93 },
];

export default function AttendanceTrend() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h4 className="mb-3 text-sm font-medium text-muted-foreground">
        Weekly Attendance Trend
      </h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 8, right: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="day"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              unit="%"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[80, 100]}
            />
            <Tooltip formatter={(v: number) => `${v}%`} />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
