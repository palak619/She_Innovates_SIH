import { useEffect, useState } from "react";
import PrototypeScanner from "@/components/PrototypeScanner";
import {
  loadQueue,
  AttendanceRecord,
  syncQueue,
  enqueue,
} from "@/lib/attendance";
import { Button } from "@/components/ui/button";

export default function PrototypePage() {
  const [queue, setQueue] = useState<AttendanceRecord[]>([]);
  const [offlineMode, setOfflineMode] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setQueue(loadQueue());
  }, []);

  function refresh() {
    setQueue(loadQueue());
  }

  async function handleSync() {
    setSyncing(true);
    setMessage(null);
    try {
      // simulate network: if offlineMode true, fail fast
      if (offlineMode) throw new Error("No network (offline mode)");
      const result = await syncQueue(600);
      setMessage(
        `Synced ${result.success} records${result.failed ? `, ${result.failed} failed` : ""}`,
      );
      refresh();
    } catch (e: any) {
      setMessage(`Sync failed: ${e.message}`);
    } finally {
      setSyncing(false);
    }
  }

  function handleManualAdd() {
    const rec: AttendanceRecord = {
      id: `MAN-${Date.now()}`,
      studentId: `S-MAN-${Math.floor(Math.random() * 9999)}`,
      name: `Manual Student ${Math.floor(Math.random() * 99)}`,
      method: "Manual",
      timestamp: new Date().toISOString(),
      synced: false,
    };
    enqueue(rec);
    refresh();
  }

  return (
    <div className="container py-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Prototype: QR Scan + Offline Sync
          </h1>
          <p className="text-sm text-muted-foreground">
            Frontend-only prototype demonstrating camera capture, simulated QR
            scanning, local queueing, and sync.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={offlineMode}
              onChange={(e) => setOfflineMode(e.target.checked)}
            />
            <span className="text-muted-foreground">Simulate offline</span>
          </label>
          <Button onClick={refresh} variant="outline">
            Refresh
          </Button>
          <Button onClick={handleSync} disabled={syncing}>
            {syncing ? "Syncing..." : "Sync queued"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <PrototypeScanner onEnqueue={refresh} />

          <div className="rounded-xl border bg-card p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Queue</h3>
              <div className="text-sm text-muted-foreground">
                {queue.length} items
              </div>
            </div>
            <div className="mt-3 space-y-2 max-h-60 overflow-auto">
              {queue.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No queued records
                </p>
              )}
              {queue.map((q) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between rounded-md border p-2"
                >
                  <div>
                    <div className="text-sm font-medium">
                      {q.name}{" "}
                      <span className="text-muted-foreground">
                        ({q.studentId})
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(q.timestamp).toLocaleString()} • {q.method}
                    </div>
                  </div>
                  <div className="text-sm">
                    {q.synced ? (
                      <span className="text-emerald-600">Synced</span>
                    ) : (
                      <span className="text-amber-600">Queued</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <Button onClick={handleManualAdd}>Add manual record</Button>
              <Button
                variant="outline"
                onClick={() => {
                  localStorage.removeItem("attendiq:queue:v1");
                  refresh();
                }}
              >
                Clear queue
              </Button>
            </div>

            {message && (
              <div className="mt-3 text-sm text-muted-foreground">
                {message}
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border bg-card p-4">
            <h4 className="text-sm font-medium">Offline-first design</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Scans are stored locally when network is unavailable and synced
              later when connectivity returns.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-4">
            <h4 className="text-sm font-medium">Demo controls</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Use <strong>Simulate Scan</strong> to enqueue a student. Toggle{" "}
              <strong>Simulate offline</strong> to test sync failures.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
