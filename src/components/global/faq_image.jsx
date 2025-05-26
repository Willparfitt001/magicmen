'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = ({ faqData }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className=" py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-wider">
          FREQUENTLY ASKED QUESTIONS
        </h2> */}

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-700 rounded-lg overflow-hidden">
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-200 flex items-center justify-between text-left">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold text-lg">
                    {openItems[item.id] ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                  <span className="text-orange-400 font-bold text-sm md:text-base uppercase tracking-wide">
                    Q. {item.question}
                  </span>
                </div>
              </button>

              {/* Answer Content */}
              {openItems[item.id] && (
                <div className="bg-gray-800/30 border-t border-gray-700">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Image Section */}
                      <div className="flex-shrink-0 lg:w-80">
                        {item.id === 1 ? (
                          // Special layout for the first item with EXPECTATIONS/REALITY
                          <div className="space-y-4">
                            <div className="relative">
                              <img
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&crop=center"
                                alt="Expectations"
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded text-sm font-bold">
                                EXPECTATIONS
                              </div>
                            </div>
                            <div className="relative">
                              <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center"
                                alt="Reality"
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                                REALITY
                              </div>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.image}
                            alt={`FAQ ${item.id}`}
                            className="w-full h-64 lg:h-48 object-cover rounded-lg"
                          />
                        )}
                      </div>

                      {/* Answer Text */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className="text-white font-bold text-base">
                            A.
                          </span>
                        </div>
                        <p className="text-gray-200 text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
