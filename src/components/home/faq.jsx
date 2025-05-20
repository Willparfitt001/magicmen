"use client";
import { useState } from "react";

export default function Faq({ title, faqs }) {
  return (
    <div className="bg-transparent text-white mt-11 p-6 rounded-lg w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-white text-center uppercase tracking-wide">
        {title}
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  // Process the answer to handle lists
  const renderAnswer = (answerContent) => {
    // Check if the answer is already an array (pre-formatted list)
    if (Array.isArray(answerContent)) {
      return (
        <div>
          <p className="mb-2">{answerContent[0]}</p>
          <ul className="list-disc pl-6 space-y-1">
            {answerContent.slice(1).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    // Check if the answer is a string that contains list items (with markers like - or •)
    if (typeof answerContent === "string") {
      // Detect if there are list items in the text
      const hasListItems = /(?:^|\n)[-•*]\s+.+/gm.test(answerContent);

      if (hasListItems) {
        // Split the answer into paragraphs and list items
        const parts = answerContent.split(/\n(?=[-•*]\s+)/);
        const intro = parts[0].replace(/[-•*]\s+/, "");
        const listItems = parts
          .slice(
            intro.startsWith("-") ||
              intro.startsWith("•") ||
              intro.startsWith("*")
              ? 0
              : 1,
          )
          .map((item) => item.replace(/^[-•*]\s+/, "").trim())
          .filter((item) => item);

        return (
          <div>
            {!intro.startsWith("-") &&
              !intro.startsWith("•") &&
              !intro.startsWith("*") &&
              intro.trim() && <p className="mb-2">{intro}</p>}
            <ul className="list-disc pl-6 space-y-1">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }

      // Check for numbered lists
      const hasNumberedList = /(?:^|\n)\d+[.)\]]\s+.+/gm.test(answerContent);

      if (hasNumberedList) {
        const parts = answerContent.split(/\n(?=\d+[.)\]]\s+)/);
        const intro = parts[0].replace(/\d+[.)\]]\s+/, "");
        const listItems = parts
          .slice(/^\d+[.)\]]\s+/.test(intro) ? 0 : 1)
          .map((item) => item.replace(/^\d+[.)\]]\s+/, "").trim())
          .filter((item) => item);

        return (
          <div>
            {!/^\d+[.)\]]\s+/.test(intro) && intro.trim() && (
              <p className="mb-2">{intro}</p>
            )}
            <ol className="list-decimal pl-6 space-y-1">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        );
      }
    }

    // If no list is detected, return the answer as is
    return <p>{answerContent}</p>;
  };

  return (
    <div className="border-b border-dotted  border-gray-700 pb-4">
      <button
        className="flex items-center justify-between w-full text-left py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-amber-500 text-xl mr-3">
            {isOpen ? "-" : "+"}
          </span>
          <span className="text-amber-500 uppercase font-bold tracking-wide">
            {question}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="pl-8 mt-2 text-gray-300">{renderAnswer(answer)}</div>
      )}
    </div>
  );
}

// Example usage with demo data
function Demo() {
  const demoFaqs = [
    {
      question: "What do male strippers wear?",
      answer:
        "Most performers have pre-set costumes, that are included in the price or offer. Some performers offer a wider range than others. Most performers are willing to customise a performance for you at a fee, or if you provide the costume.\n\nCommon costumes:\n- Policeman\n- Fireman\n- Soldier\n- Cowboy\n- Tradie\n\nBroader spectrum of costumes:\n- Postman\n- Pilot\n- Pizza Delivery\n- Harry Potter\n- Aquaman\n- Nerd\n- Superman\n- Magic Mike Tribute\n- Grease Tribute",
    },
    {
      question: "How to book a performer?",
      answer:
        "Booking a performer is easy! Just follow these steps:\n1. Choose your preferred performer\n2. Select a date and time\n3. Discuss costume preferences\n4. Make the payment\n5. Confirm all details before the event",
    },
    {
      question: "Regular paragraph example?",
      answer:
        "This is just a regular paragraph with no lists. The text should appear normally without any special formatting. This shows how the component handles different types of content dynamically.",
    },
  ];

  return <Faq title="Frequently Asked Questions" faqs={demoFaqs} />;
}

export { Demo };
