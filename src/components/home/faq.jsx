'use client';
import { useState } from 'react';

export default function Faq({ title, faqs }) {
  return (
    <div className="bg-transparent text-white mt-11 p-6 rounded-lg w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-white text-center uppercase tracking-wide">
        {title}
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to safely render HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  // Process HTML tags in text content
  const processHTMLTags = (content) => {
    // Handle common HTML tags
    let processedContent = content;

    // Replace <br> tags with newlines for later processing
    processedContent = processedContent.replace(/<br\s*\/?>/gi, '\n');

    return processedContent;
  };

  // Helper to determine if text contains HTML tags
  const containsHTMLTags = (text) => {
    const htmlTagPattern = /<\/?[a-z][\s\S]*?>/i;
    return htmlTagPattern.test(text);
  };

  // Process the answer to handle lists, paragraphs, and HTML tags
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

    // Check if the answer is a string
    if (typeof answerContent === 'string') {
      // Pre-process HTML tags
      const processedContent = processHTMLTags(answerContent);

      // If content has complex HTML that shouldn't be processed by our other formatters
      if (
        containsHTMLTags(processedContent) &&
        (processedContent.includes('<div') ||
          processedContent.includes('<p') ||
          processedContent.includes('<ul') ||
          processedContent.includes('<ol'))
      ) {
        return <div dangerouslySetInnerHTML={createMarkup(processedContent)} />;
      }

      // Detect if there are list items in the text
      const hasListItems = /(?:^|\n)[-•*]\s+.+/gm.test(processedContent);

      if (hasListItems) {
        // Split the answer into paragraphs and list items
        const parts = processedContent.split(/\n(?=[-•*]\s+)/);
        const intro = parts[0].replace(/[-•*]\s+/, '');
        const listItems = parts
          .slice(
            intro.startsWith('-') ||
              intro.startsWith('•') ||
              intro.startsWith('*')
              ? 0
              : 1
          )
          .map((item) => item.replace(/^[-•*]\s+/, '').trim())
          .filter((item) => item);

        return (
          <div>
            {!intro.startsWith('-') &&
              !intro.startsWith('•') &&
              !intro.startsWith('*') &&
              intro.trim() &&
              (containsHTMLTags(intro) ? (
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={createMarkup(intro)}
                />
              ) : (
                <p className="mb-2">{intro}</p>
              ))}
            <ul className="list-disc pl-6 space-y-1">
              {listItems.map((item, index) => (
                <li key={index}>
                  {containsHTMLTags(item) ? (
                    <div dangerouslySetInnerHTML={createMarkup(item)} />
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      }

      // Check for numbered lists
      const hasNumberedList = /(?:^|\n)\d+[.)\]]\s+.+/gm.test(processedContent);

      if (hasNumberedList) {
        const parts = processedContent.split(/\n(?=\d+[.)\]]\s+)/);
        const intro = parts[0].replace(/\d+[.)\]]\s+/, '');
        const listItems = parts
          .slice(/^\d+[.)\]]\s+/.test(intro) ? 0 : 1)
          .map((item) => item.replace(/^\d+[.)\]]\s+/, '').trim())
          .filter((item) => item);

        return (
          <div>
            {!/^\d+[.)\]]\s+/.test(intro) &&
              intro.trim() &&
              (containsHTMLTags(intro) ? (
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={createMarkup(intro)}
                />
              ) : (
                <p className="mb-2">{intro}</p>
              ))}
            <ol className="list-decimal pl-6 space-y-1">
              {listItems.map((item, index) => (
                <li key={index}>
                  {containsHTMLTags(item) ? (
                    <div dangerouslySetInnerHTML={createMarkup(item)} />
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ol>
          </div>
        );
      }

      // Handle multiple paragraphs separated by double newlines
      if (processedContent.includes('\n\n')) {
        const paragraphs = processedContent
          .split(/\n\n+/)
          .filter((p) => p.trim());
        return (
          <div className="space-y-3">
            {paragraphs.map((paragraph, index) =>
              containsHTMLTags(paragraph) ? (
                <div
                  key={index}
                  dangerouslySetInnerHTML={createMarkup(paragraph.trim())}
                />
              ) : (
                <p key={index}>{paragraph.trim()}</p>
              )
            )}
          </div>
        );
      }

      // Handle single line breaks within normal paragraphs
      if (processedContent.includes('\n')) {
        const lines = processedContent
          .split('\n')
          .filter((line) => line.trim());
        return (
          <div className="space-y-3">
            {lines.map((line, index) =>
              containsHTMLTags(line) ? (
                <div
                  key={index}
                  dangerouslySetInnerHTML={createMarkup(line.trim())}
                />
              ) : (
                <p key={index}>{line.trim()}</p>
              )
            )}
          </div>
        );
      }

      // Handle simple inline HTML tags
      if (containsHTMLTags(processedContent)) {
        return <div dangerouslySetInnerHTML={createMarkup(processedContent)} />;
      }
    }

    // If no special formatting is detected, return the answer as is
    return <p>{answerContent}</p>;
  };

  return (
    <div className="border-b border-dotted border-gray-700 pb-4">
      <button
        className="flex items-center justify-between w-full text-left py-2"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center">
          <span className="text-amber-500 text-xl mr-3">
            {isOpen ? '-' : '+'}
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

function Demo() {
  const demoFaqs = [
    {
      question: 'What do male strippers wear?',
      answer:
        'Most performers have pre-set costumes, that are included in the price or offer. Some performers offer a wider range than others. Most performers are willing to customise a performance for you at a fee, or if you provide the costume.\n\nCommon costumes:\n- Policeman\n- Fireman\n- Soldier\n- Cowboy\n- Tradie\n\nBroader spectrum of costumes:\n- Postman\n- Pilot\n- Pizza Delivery\n- Harry Potter\n- Aquaman\n- Nerd\n- Superman\n- Magic Mike Tribute\n- Grease Tribute',
    },
    {
      question: 'How to book a performer?',
      answer:
        'Booking a performer is easy! Just follow these steps:\n1. Choose your preferred performer\n2. Select a date and time\n3. Discuss costume preferences\n4. Make the payment\n5. Confirm all details before the event',
    },
    {
      question: 'Regular paragraph example?',
      answer:
        'This is just a regular paragraph with no lists. The text should appear normally without any special formatting. This shows how the component handles different types of content dynamically.',
    },
    {
      question: 'Multiple paragraphs example?',
      answer:
        'This is the first paragraph with some information about our services.\n\nThis is the second paragraph that contains additional details you might want to know.\n\nAnd here is a third paragraph with concluding information.',
    },
    {
      question: 'Single line breaks example?',
      answer:
        'Line 1 with some text.\nLine 2 with different text.\nLine 3 contains the final piece of information.',
    },
    {
      question: 'HTML formatting example?',
      answer:
        'You can use <b>bold text</b> and <i>italic text</i> to emphasize important information. You can even <span style="color: red;">change the color</span> of specific text.\n\nHere\'s a paragraph with <u>underlined text</u> and some <strong>strongly emphasized content</strong>.',
    },
    {
      question: 'HTML with lists example?',
      answer:
        '<b>Important Features:</b>\n- Feature one with <i>italic emphasis</i>\n- Feature two with <span style="color: green;">colored text</span>\n- Feature three with <u>underlined text</u>\n\n<strong>Additional Benefits:</strong>\n1. Benefit one with <b>bold text</b>\n2. Benefit two with <span style="font-size: 1.1em;">slightly larger text</span>\n3. Benefit three with <i>italic styling</i>',
    },
    {
      question: 'HTML table example?',
      answer:
        '<div>Our pricing structure:\n<table style="width:100%; border-collapse: collapse; margin-top: 10px;">\n  <tr style="background-color: #333;">\n    <th style="padding: 8px; border: 1px solid #444;">Package</th>\n    <th style="padding: 8px; border: 1px solid #444;">Price</th>\n    <th style="padding: 8px; border: 1px solid #444;">Duration</th>\n  </tr>\n  <tr>\n    <td style="padding: 8px; border: 1px solid #444;">Basic</td>\n    <td style="padding: 8px; border: 1px solid #444;">$100</td>\n    <td style="padding: 8px; border: 1px solid #444;">30 min</td>\n  </tr>\n  <tr>\n    <td style="padding: 8px; border: 1px solid #444;">Standard</td>\n    <td style="padding: 8px; border: 1px solid #444;">$150</td>\n    <td style="padding: 8px; border: 1px solid #444;">45 min</td>\n  </tr>\n  <tr>\n    <td style="padding: 8px; border: 1px solid #444;">Premium</td>\n    <td style="padding: 8px; border: 1px solid #444;">$250</td>\n    <td style="padding: 8px; border: 1px solid #444;">60 min</td>\n  </tr>\n</table>\n</div>',
    },
    {
      question: 'Mixed content with HTML and line breaks?',
      answer:
        'Here\'s some regular text.\n\nHere\'s text with <b>bold</b> and <i>italic</i> formatting.\n\n- List item with <span style="color: #ff9900;">colored text</span>\n- Another list item with <u>underlined content</u>\n- Third item with <b>bold text</b>\n\nAnd a final paragraph with <strong>strongly emphasized</strong> content and <br><br>multiple<br>line<br>breaks.',
    },
    {
      question: 'BR Tags Example?',
      answer:
        'Line one<br>Line two<br>Line three<br><br>New paragraph after double break<br>Final line',
    },
    {
      question: 'Complex HTML with embedded lists?',
      answer:
        '<div style="margin-bottom: 10px;">First paragraph with some context:</div>\n<ul>\n  <li>First item with <b>bold</b> text</li>\n  <li>Second item with <i>italic</i> text</li>\n  <li>Third item with <span style="text-decoration: underline;">underlined</span> text</li>\n</ul>\n<div style="margin-top: 10px;">Second paragraph with more context:</div>\n<ol>\n  <li>Numbered item one</li>\n  <li>Numbered item two</li>\n  <li>Numbered item three</li>\n</ol>',
    },
  ];

  return (
    <Faq
      title="Frequently Asked Questions"
      faqs={demoFaqs}
    />
  );
}

export { Demo };
