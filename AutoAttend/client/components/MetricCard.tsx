import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MetricCard({
  title,
  value,
  delta,
  icon,
  className,
}: {
  title: string;
  value: string | number;
  delta?: string;
  icon?: ReactNode;
  className?: string;
}) {
  const trendPositive = delta?.trim().startsWith("+");
  return (
    <div className={cn("rounded-xl border bg-card p-5 shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <h3 className="text-2xl font-semibold">{value}</h3>
        {delta && (
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-xs font-medium",
              trendPositive
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
                : "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300",
            )}
          >
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}
