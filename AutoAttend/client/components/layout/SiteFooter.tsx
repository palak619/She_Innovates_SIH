export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-primary to-accent" />
            <span className="font-bold">AttendIQ</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Automated Student Attendance Monitoring & Analytics for Colleges.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#features" className="hover:text-foreground">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-foreground">
                How it works
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-foreground">
                Demo dashboard
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#faq" className="hover:text-foreground">
                FAQ
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-foreground">
                Privacy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get updates</h4>
          <form className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button className="rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex items-center justify-between py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AttendIQ. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#terms" className="hover:text-foreground">
              Terms
            </a>
            <a href="#privacy" className="hover:text-foreground">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
