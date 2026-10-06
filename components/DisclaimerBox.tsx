import type { ReactNode } from "react";

export function DisclaimerBox({
  children,
  title = "Important",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <aside className="disclaimer" aria-label={title}>
      <p className="disclaimer__title">{title}</p>
      <p>{children}</p>
    </aside>
  );
}
