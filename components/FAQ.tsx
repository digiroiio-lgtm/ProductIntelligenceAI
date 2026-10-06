export interface FaqItem {
  question: string;
  answer: string;
}

/** Visible FAQ. Pass the same items to pageGraph() so FAQPage JSON-LD matches. */
export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <div key={item.question} className="faq__item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
