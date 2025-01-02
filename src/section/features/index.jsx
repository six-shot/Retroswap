import React from 'react'
import card1 from "../../assets/Digital-flow-2.png"
import rightsection from "../../assets/Right-Section_1.avif"
import rightbottom from "../../assets/Bento-grid-3-p-1080.png"
import leftbottom from "../../assets/Frame-1000002945.png";
import coin from "../../assets/Icon-Container.png";
export default function Features() {
  return (
    <div className="mt-[164px]">
      <h2 className="md:text-[3.25rem] text-[2.375rem] leading-[1.2] text-white text-center">
        RetoSwap — It doesn't get <br className="md:flex hidden" /> more private
        than that
      </h2>
      <div className="max-w-[1440px] mx-auto mt-[2.5rem]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[1rem] md:px-[2.5rem] px-[1rem] ">
          <div className="w-full h-[480px] border border-[#ffffff1f] rounded-[1.5rem] relative overflow-hidden">
            <img
              src={card1}
              alt="card1"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex  justify-center p-[3.125rem]">
              <div className="flex flex-col gap-[.5rem]">
                <p className="text-white md:text-[2rem] text-[1.75rem]">
                  Non Custodian
                </p>
                <p className="text-[#c2c2c2] text-[1rem]">
                  Full control over your funds
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[480px] border border-[#ffffff1f] rounded-[1.5rem] relative overflow-hidden">
            <img
              src={rightsection}
              alt="card1"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex  justify-center p-[3.125rem]">
              <div className="flex flex-col gap-[.5rem]">
                <p className="text-white md:text-[2rem] text-[1.75rem]">
                  Non Custodian
                </p>
                <p className="text-[#c2c2c2] text-[1rem]">
                  Full control over your funds
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[480px] bg-[#141414] border border-[#ffffff1f] rounded-[1.5rem] relative overflow-hidden">
            <div className="absolute inset-0 flex  justify-center p-[3.125rem]">
              <div className="flex flex-col gap-[.5rem] text-center">
                <p className="text-white md:text-[2rem] text-[1.75rem] ">
                  P2P ( Peer to Peer )
                </p>
                <p className="text-[#c2c2c2] text-[1rem]">
                  Direct exchange, without intermediaries
                </p>
                <img
                  src={leftbottom}
                  alt="card1"
                  className="w-[400px] mt-[4rem] "
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[480px] border border-[#ffffff1f] rounded-[1.5rem] relative overflow-hidden">
            <img
              src={rightbottom}
              alt="card1"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex  justify-center p-[3.125rem]">
              <div className="flex flex-col gap-[.5rem]">
                <p className="text-white md:text-[2rem] text-[1.75rem] text-center ">
                  Powered by Monero & Tor
                </p>
                <p className="text-[#c2c2c2] text-[1rem]">
                  Secure Connection. Private Blockchain.
                </p>
                <img src={coin} className="w-[372px] mt-[3rem]" alt="coin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
