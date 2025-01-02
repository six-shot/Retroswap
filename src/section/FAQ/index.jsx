import React, { useState } from "react";

// Accordion Component
const Accordion = ({ title, answer, index, hoveredIndex, setHoveredIndex }) => {
  const isOpen = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative p-[1px] overflow-hidden rounded-[1.25rem]"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className="bg-[#141414] relative z-[10] rounded-[1.25rem] px-[1.5rem]">
        <button className="flex justify-between w-full pt-[1.5rem]">
          <span className="text-[1.5rem] leading-[1.55]">{title}</span>
          <svg
            className="fill-[white] shrink-0"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                isOpen ? "rotate-90" : ""
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </svg>
        </button>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[white] ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pt-[1.5rem]"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden pb-[1.5rem] text-[1rem] text-[#c2c2c2]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

// Accordion Container
const AccordionContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = [
    {
      title: "What is RetoSwap, and how does it work?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    { title: "Is RetoSwap safe to use?", answer: "It is safe and efficient." },
    {
      title: "Which currencies does RetoSwap support?",
      answer: "Multiple currencies are supported.",
    },
    {
      title: "What are the requirements to use RetoSwap?",
      answer: "No special requirements are needed.",
    },
    {
      title: "Do I need to verify my identity to use RetoSwap?",
      answer: "Yes, identity verification is required.",
    },
    {
      title: "How are disputes or trade conflicts resolved?",
      answer: "Disputes are resolved with clear guidelines.",
    },
    {
      title: "What fees does RetoSwap charge?",
      answer: "Minimal transaction fees are applied.",
    },
    {
      title: "How long does a typical transaction take?",
      answer: "Transactions are typically quick and efficient.",
    },
    {
      title: "Can I use RetoSwap in my country?",
      answer: "Check our website for supported regions.",
    },
  ];

  return (
    <div className="text-white">
      <div className="relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px] mt-[6.25rem]">
        <div className="relative min-h-screen isolate flex">
          {/* Left Section */}
          <div className="w-1/2 h-full text-white sticky top-[6.25rem]">
            <h2 className="text-[3.25rem] leading-[1.2]">
              Answers to the most <br /> frequent questions
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-1/2 h-full flex flex-col gap-[0.5rem]">
            {data.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                answer={item.answer}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionContainer;
