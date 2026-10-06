export interface UseCase {
  id: string;
  title: string;
  goal: string;
  data: string;
  analysis: string;
  decision: string;
  output: string;
}

/** One use case, mapped Goal → Data → AI-Assisted Analysis → Human Decision → Output. */
export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const rows: [string, string][] = [
    ["Goal", useCase.goal],
    ["Data", useCase.data],
    ["AI-Assisted Analysis", useCase.analysis],
    ["Human Decision", useCase.decision],
    ["Output", useCase.output],
  ];
  return (
    <article className="usecase" id={useCase.id}>
      <h3>{useCase.title}</h3>
      <dl className="usecase__flow">
        {rows.map(([term, value]) => (
          <div key={term} className="usecase__row">
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
