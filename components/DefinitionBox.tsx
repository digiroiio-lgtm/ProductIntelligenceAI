import type { ReactNode } from "react";

/**
 * Direct-answer box. Place immediately below the H1 with a 40-80 word answer.
 * `data-definition` lets the validation script check length.
 */
export function DefinitionBox({
  children,
  label = "Short answer",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="definition">
      <p className="definition__label">{label}</p>
      <p className="definition__text" data-definition>
        {children}
      </p>
    </div>
  );
}
