import { useEffect, useRef, useState } from "react";
import {
  enqueue,
  loadQueue,
  saveQueue,
  AttendanceRecord,
} from "@/lib/attendance";
import { Button } from "@/components/ui/button";

const SAMPLE_STUDENTS = [
  { id: "S1001", name: "Aisha Kumar" },
  { id: "S1002", name: "Rohan Patel" },
  { id: "S1003", name: "Maya Singh" },
  { id: "S1004", name: "Arjun Mehta" },
  { id: "S1005", name: "Priya Sharma" },
];

export default function PrototypeScanner({
  onEnqueue,
}: {
  onEnqueue?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [scanning, setScanning] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [autoSimulate, setAutoSimulate] = useState(true);
  const simulateRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      stopCamera();
      stopSimulation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setStatus("Camera started");
      setScanning(true);
      if (autoSimulate) startSimulation();
    } catch (e) {
      console.error(e);
      setStatus("Camera permission denied or not available");
    }
  }

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.srcObject = null;
      } catch {}
    }
    setScanning(false);
  }

  function startSimulation() {
    stopSimulation();
    simulateRef.current = window.setInterval(() => {
      doSimulatedScan();
    }, 3000);
  }

  function stopSimulation() {
    if (simulateRef.current) {
      window.clearInterval(simulateRef.current);
      simulateRef.current = null;
    }
  }

  function doSimulatedScan() {
    const sample =
      SAMPLE_STUDENTS[Math.floor(Math.random() * SAMPLE_STUDENTS.length)];
    const rec: AttendanceRecord = {
      id: `${sample.id}-${Date.now()}`,
      studentId: sample.id,
      name: sample.name,
      method: "QR",
      timestamp: new Date().toISOString(),
      synced: false,
    };
    enqueue(rec);
    setStatus(`Scanned ${rec.studentId} (${rec.name})`);
    onEnqueue?.();
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg border bg-card">
        <div className="aspect-video bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            playsInline
            muted
          />
          {!scanning && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="mb-3 text-sm text-muted-foreground">
                  Camera preview
                </p>
                <Button onClick={startCamera} size="sm">
                  Start camera
                </Button>
              </div>
            </div>
          )}
          {scanning && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-72 -rotate-2 rounded-xl border-2 border-dashed border-primary/60" />
              <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/80 px-3 py-1 text-xs text-primary-foreground">
                Scanning (simulated)
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={scanning ? "destructive" : "default"}
          onClick={() => (scanning ? stopCamera() : startCamera())}
        >
          {scanning ? "Stop" : "Start"}
        </Button>
        <Button
          variant={autoSimulate ? "outline" : "ghost"}
          onClick={() => setAutoSimulate((s) => !s)}
        >
          {autoSimulate ? "Auto-simulate: on" : "Auto-simulate: off"}
        </Button>
        <Button onClick={doSimulatedScan} variant="secondary">
          Simulate Scan
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">{status}</p>
    </div>
  );
}
