export type AttendanceRecord = {
  id: string; // unique id
  studentId: string;
  name?: string;
  method: "QR" | "RFID" | "Face" | "Manual";
  timestamp: string; // ISO
  synced?: boolean;
};

const STORAGE_KEY = "attendiq:queue:v1";

export function loadQueue(): AttendanceRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AttendanceRecord[];
  } catch (e) {
    console.error("Failed to load queue", e);
    return [];
  }
}

export function saveQueue(items: AttendanceRecord[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Failed to save queue", e);
  }
}

export function enqueue(record: AttendanceRecord) {
  const q = loadQueue();
  q.unshift(record);
  saveQueue(q);
}

export function clearQueue() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear queue", e);
  }
}

// Simulated sync: pretend to POST each record and return a promise
export async function syncQueue(
  simulateNetworkDelay = 800,
): Promise<{ success: number; failed: number }> {
  const queue = loadQueue();
  if (queue.length === 0) return { success: 0, failed: 0 };

  // Simulate network call per record
  let success = 0;
  let failed = 0;
  for (const r of queue) {
    // For prototype, random chance of failure
    await new Promise((res) => setTimeout(res, simulateNetworkDelay));
    if (Math.random() > 0.06) {
      success++;
    } else {
      failed++;
    }
  }

  if (failed === 0) {
    clearQueue();
  } else {
    // Keep failed items (simulate partial success) - for prototype we'll remove succeeded ones
    const remains = Array.from({ length: failed }).map((_, i) => ({
      ...queue[i],
      synced: false,
    }));
    saveQueue(remains);
  }

  return { success, failed };
}
