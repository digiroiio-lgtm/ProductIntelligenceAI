interface Step {
  title: string;
  description?: string;
}

/** Ordered workflow rendered in HTML/CSS: horizontal on desktop, vertical on mobile. */
export function ProcessSteps({
  steps,
  label,
  variant = "flow",
}: {
  steps: Step[];
  /** Accessible name for the list */
  label: string;
  variant?: "flow" | "compact";
}) {
  return (
    <ol className={`steps steps--${variant}`} aria-label={label}>
      {steps.map((step) => (
        <li key={step.title} className="steps__item">
          <span className="steps__title">{step.title}</span>
          {step.description ? (
            <span className="steps__desc">{step.description}</span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
