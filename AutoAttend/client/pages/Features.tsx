import {
  CheckCircle2,
  QrCode,
  Cpu,
  PieChart,
  ShieldCheck,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  const features = [
    {
      icon: <QrCode className="h-6 w-6 text-primary" />,
      title: "Multi-method capture",
      desc: "QR codes, RFID badges, or biometric/face recognition — configure per course or lab.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Offline-first scanning",
      desc: "Local queueing when offline and automatic sync when connectivity is restored.",
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "Real-time analytics",
      desc: "Campus-wide dashboards, per-course KPIs, and trend detection to monitor engagement.",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: "Smart alerts",
      desc: "Custom thresholds trigger notifications to faculty, students, and guardians.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Privacy & security",
      desc: "Role-based access, audit logs, and encryption to meet institutional compliance.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Export & integrations",
      desc: "CSV exports and LMS/SIS connectors for easy reporting and roster sync.",
    },
  ];

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold">Features</h1>
        <p className="mt-3 text-muted-foreground">
          A modern stack of features built for colleges to manage attendance at
          scale.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border bg-card p-6 text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              {f.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-card p-8 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to pilot at your campus?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Request a demo or try the prototype to validate workflows.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Button asChild>
            <a href="/prototype">Try prototype</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Request demo</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
