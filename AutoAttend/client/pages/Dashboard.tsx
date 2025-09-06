import { Users, CalendarCheck2, AlertTriangle, Clock } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import AttendanceTrend from "@/components/charts/AttendanceTrend";
import DepartmentBreakdown from "@/components/charts/DepartmentBreakdown";

export default function Dashboard() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">
          Live attendance insights across your college
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Present Today"
          value="8,432"
          delta="+2.1%"
          icon={<Users className="h-4 w-4 text-primary" />}
        />
        <MetricCard
          title="Average Attendance"
          value="94.2%"
          delta="+0.8%"
          icon={<CalendarCheck2 className="h-4 w-4 text-primary" />}
        />
        <MetricCard
          title="Late Arrivals"
          value="126"
          delta="-4.2%"
          icon={<Clock className="h-4 w-4 text-primary" />}
        />
        <MetricCard
          title="Absence Alerts"
          value="58"
          delta="+1.4%"
          icon={<AlertTriangle className="h-4 w-4 text-primary" />}
        />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AttendanceTrend />
        </div>
        <div>
          <DepartmentBreakdown />
        </div>
      </div>
    </div>
  );
}
