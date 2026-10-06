interface ComparisonTableProps {
  caption: string;
  /** Header for the first (row label) column */
  rowHeader: string;
  columns: string[];
  rows: { label: string; cells: string[] }[];
  note?: string;
}

/** Accessible comparison table; scrolls horizontally inside a focusable region on small screens. */
export function ComparisonTable({
  caption,
  rowHeader,
  columns,
  rows,
  note,
}: ComparisonTableProps) {
  return (
    <div className="table-block">
      <div className="table-wrap" role="region" aria-label={caption} tabIndex={0}>
        <table>
          <caption>{caption}</caption>
          <thead>
            <tr>
              <th scope="col">{rowHeader}</th>
              {columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.cells.map((cell, index) => (
                  <td key={`${row.label}-${columns[index]}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="table-note">{note}</p> : null}
    </div>
  );
}
