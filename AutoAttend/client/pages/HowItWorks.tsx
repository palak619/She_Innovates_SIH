export default function HowItWorksPage() {
  const steps = [
    {
      title: "Set up courses",
      desc: "Import rosters from your SIS/LMS or CSV. Configure schedules, rooms, and capture methods per course.",
    },
    {
      title: "Choose capture",
      desc: "Enable QR code, RFID badge, or face recognition. Define grace periods and proctoring rules.",
    },
    {
      title: "Students check-in",
      desc: "Students scan QR codes or use biometric readers. The app prevents duplicates and flags anomalies.",
    },
    {
      title: "Analyze & act",
      desc: "Use dashboards to spot trends, set alerts for at-risk students, and export reports for compliance.",
    },
  ];

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold">How it works</h1>
        <p className="mt-3 text-muted-foreground">
          A simple flow designed for speed, privacy, and accuracy.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-2xl border bg-background p-6"
          >
            <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Step {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Offline & online classes</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Support both in-person and remote classes. For offline scenarios,
            scans are queued locally and synchronized when network returns to
            ensure no loss of data.
          </p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Privacy & compliance</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Role-based access, encrypted data storage, and minimal retention
            options to help comply with FERPA and GDPR.
          </p>
        </div>
      </div>
    </div>
  );
}
