import React, { useState } from "react";
import windows from "../../assets/windows.png";

export default function Download() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { title: "RetroSwap for windows", icon: windows },
    { title: "RetroSwap for windows", icon: windows },
    { title: "RetroSwap for windows", icon: windows },
    { title: "RetroSwap for windows", icon: windows },
  ];

  return (
    <div className="py-[164px] max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[3.125rem] leading-[1.2] text-white">
          Download RetoSwap <br /> for your platform
        </h2>
        <p className="text-[#c2c2c2] leading-[1.6] tracking-[-.02rem] max-w-[32rem] mt-[1rem]">
          Choose the right version for your operating system and install
          RetoSwap to start exchanging p2p.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[1rem] mt-[2.5rem]">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative p-[1px] rounded-[1.25rem] overflow-hidden cursor-pointer"
          >
            <div className="p-[1.5rem] bg-[#090909] rounded-[1.25rem] h-[17rem] relative z-[3] flex justify-between flex-col">
              <div>
                <div className="w-[3.75rem] h-[3.75rem] bg-[#141414] flex justify-center items-center rounded-full mb-[.875rem]">
                  <img src={card.icon} alt="Windows icon" />
                </div>
                <h5 className="text-[1.125rem] leading-[1.4] font-semibold text-white">
                  {card.title}
                </h5>
              </div>
              <button className="w-full h-[43px] bg-[#ffffff1f] border border-[#ffffff0d] text-[.875rem] font-medium rounded-[6rem] text-white">
                Download
              </button>
            </div>
            <div className="stroke-rectangle absolute inset-0"></div>
            {hoveredIndex === index && (
              <div className="stroke-rectangle is-gradient"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
