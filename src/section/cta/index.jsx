import React from 'react'
import blur1 from "../../assets/Group-48098168.avif"
import blur2 from "../../assets/Group-40275.avif";
export default function CTA() {
  return (
    <div className="max-w-[1440px] mx-auto mt-[1rem]">
      <div className="border relative border-[#ffffff1f] bg-[#ffffff0d] rounded-[1.25rem] p-[2.5rem] flex justify-center items-center flex-col overflow-hidden">
        <div className="flex flex-col items-center gap-[1rem]">
          <h2 className="text-[3.25rem] leading-[1.2] text-white">
            Join our SimpleX!
          </h2>
          <p className="max-w-[28.75rem] text-center text-[#c2c2c2]">
            Be the first to hear about the latest news, updates and important
            events in the RetoSwap ecosystem!
          </p>
          <button className='h-[58px] bg-white rounded-[6rem] text-[.875rem] px-[2.75rem] font-medium shadow-[0_0_50px_6px_#ffb876b3]'>Connect</button>
        </div>
        <img
          className="absolute bottom-[-14rem] left-[-15rem] w-[40rem]"
          src={blur1}
        />
        <img
          className="absolute top-[-14rem] right-[-15rem] w-[40rem]"
          src={blur2}
        />
        <div className="cta-prime-line" />
      </div>
    </div>
  );
}
