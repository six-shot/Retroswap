import React from 'react'

export default function Steps() {
  return (
    <div>
      {" "}
      <div className="relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px]">
        <div className="relative min-h-screen isolate">
          <div className=" w-1/2  h-full  text-white   ">
            <h1 className=" text-7xl sticky top-[6.25rem]">STICKY</h1>
          </div>

          <div className="w-1/2 h-full bg-black  relative -z-10 -right-[50%] flex flex-col gap-[1.5rem]">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-black  w-full h-[440px] border border-[#ffffff1f] rounded-[1.5rem]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}