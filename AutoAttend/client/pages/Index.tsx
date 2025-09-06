import { Button } from "@/components/ui/button";
import AttendanceTrend from "@/components/charts/AttendanceTrend";
import DepartmentBreakdown from "@/components/charts/DepartmentBreakdown";
import {
  CheckCircle2,
  ShieldCheck,
  PieChart,
  QrCode,
  Bell,
  Cpu,
} from "lucide-react";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Now available for colleges worldwide
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Automated Student Attendance Monitoring &
                <span className="block text-gradient">Analytics System</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground">
                Replace manual registers with a secure, real-time platform that
                captures attendance and unlocks actionable insights for
                administrators, faculty, and students.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <a href="#demo">Request a demo</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/dashboard">View analytics</a>
                </Button>
              </div>
              <ul className="mt-6 grid max-w-xl gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {[
                  {
                    icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
                    text: "Accurate, tamper-resistant records",
                  },
                  {
                    icon: <ShieldCheck className="h-4 w-4 text-primary" />,
                    text: "FERPA/GDPR aligned privacy",
                  },
                  {
                    icon: <QrCode className="h-4 w-4 text-primary" />,
                    text: "QR, RFID, or Face-ID capture",
                  },
                  {
                    icon: <Bell className="h-4 w-4 text-primary" />,
                    text: "Instant absence notifications",
                  },
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {f.icon}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
              <div className="rounded-2xl border bg-card/60 p-4 shadow-xl backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border bg-background p-4">
                    <p className="text-xs font-medium text-muted-foreground">
                      Today
                    </p>
                    <p className="mt-1 text-3xl font-semibold">94.2%</p>
                    <p className="text-xs text-emerald-600">
                      +0.8% vs last week
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background p-4">
                    <p className="text-xs font-medium text-muted-foreground">
                      Alerts
                    </p>
                    <p className="mt-1 text-3xl font-semibold">58</p>
                    <p className="text-xs text-rose-600">+1.4% this week</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <AttendanceTrend />
                  <DepartmentBreakdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to automate attendance
          </h2>
          <p className="mt-2 text-muted-foreground">
            Flexible capture methods, clean dashboards, and powerful alerts
            designed for higher education.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <QrCode className="h-5 w-5 text-primary" />,
              title: "QR / RFID / Face-ID",
              desc: "Choose the method that fits each class. Prevents proxy attendance and ensures authenticity.",
            },
            {
              icon: <PieChart className="h-5 w-5 text-primary" />,
              title: "Real-time analytics",
              desc: "Track presence, punctuality, absence trends, and drill down by department or course.",
            },
            {
              icon: <Cpu className="h-5 w-5 text-primary" />,
              title: "Seamless integrations",
              desc: "Connect SIS/LMS to sync rosters, timetables, and course data automatically.",
            },
            {
              icon: <Bell className="h-5 w-5 text-primary" />,
              title: "Smart notifications",
              desc: "Trigger alerts to students and guardians when thresholds are breached.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-primary" />,
              title: "Security & privacy",
              desc: "Encryption, audit logs, and granular roles keep data protected and compliant.",
            },
            {
              icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
              title: "One-click reports",
              desc: "Export attendance sheets and compliance reports in seconds.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-2 text-muted-foreground">
              Fast to deploy, simple to use – for faculty and students.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Set up courses",
                desc: "Import rosters from SIS/LMS or CSV. Define schedules and rooms.",
              },
              {
                step: "2",
                title: "Choose capture",
                desc: "Enable QR, RFID, or Face-ID per course and set grace periods.",
              },
              {
                step: "3",
                title: "Students check-in",
                desc: "Scan on entry or during class. Prevent duplicates and proxies.",
              },
              {
                step: "4",
                title: "Analyze & act",
                desc: "Monitor dashboards, send alerts, and export reports instantly.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border bg-background p-6"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Step {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
        <div className="container py-16">
          <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
            <h3 className="text-2xl font-semibold">
              Ready to modernize attendance at your college?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Get a live walkthrough tailored to your workflows and policies.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg">Schedule a demo</Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/dashboard">Explore the demo dashboard</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
