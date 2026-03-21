import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  icon: ReactNode;
  month: string;
}>;

export function CareerTimelineItem({ children, icon, month }: Props) {
  return (
    <li>
      <div className="relative pt-3">
        <span
          className="absolute left-5 -ml-px h-full w-0.5 bg-zinc-200 dark:bg-zinc-700"
          aria-hidden="true"
        />

        <div className="relative z-0 flex items-center space-x-4">
          <div>
            <span className="card text-secondary flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow-sm ring-8 ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-900">
              {icon}
            </span>
          </div>

          <div className="card flex-1">
            <h4 className="font-semibold">{month}</h4>
            <p className="text-primary mt-1 text-sm">{children}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
