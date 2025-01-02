import React from "react";
import card1 from "../../assets/Digital-flow-3.png";
import card2 from "../../assets/Digital-flow-1.png";
import card3 from "../../assets/Hands.png";
const stepsData = [
  {
    id: 1,
    title: "Download & Install",
    description:
      "Install the desktop client to get access to the decentralized exchange network.",
    img: card1,
  },
  {
    id: 2,
    title: "Fund Account",
    description: "Fund your non-custodial account to start swapping.",
    img: card2,
  },
  {
    id: 3,
    title: "Start Swapping",
    description:
      "Start trading securely, it doesn't get more private than RetoSwap.",
    img: card3,
  },
];

export default function Steps() {
  return (
    <div className="relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px] mt-[6.25rem] px-[2.5rem]">
      <div className="relative min-h-screen isolate flex">
        {/* Left Section */}
        <div className="w-1/2 h-full text-white sticky top-[6.25rem]">
          <h2 className="text-[3.25rem] leading-[1.2]">
            Start Swapping in 3 <br /> Simple Steps
          </h2>
          <button className="mt-[4rem] h-[58px] bg-white text-black rounded-[6rem] text-[.875rem] px-[2.75rem] font-medium shadow-[0_0_50px_6px_#ffb876b3]">
            Download Client
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full flex flex-col gap-[1.5rem]">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="bg-black w-full h-[440px] border border-[#ffffff1f] rounded-[1.5rem] relative"
            >
              <img
                src={step.img}
                alt={step.title}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[1.5rem]"
              />
              <div className="absolute inset-0 flex items-start w-full text-white p-[2rem]">
                <div className="flex w-full justify-between items-start">
                  <div className="flex flex-col gap-[.75rem]">
                    <h4 className="text-[2rem] leading-[1.25]">{step.title}</h4>
                    <p className="text-[#c2c2c2] text-[1rem] max-w-[20rem]">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-[3.75rem] h-[3.75rem] bg-[#191919] border border-[#ffffff0d] flex justify-center items-center rounded-full">
                    <h5 className="text-white">{`0${step.id}`}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
