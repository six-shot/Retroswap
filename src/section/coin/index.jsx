import React from "react";
import coin from "../../assets/coin_animation.mov";

export default function Coin() {
  return (
    <div className="relative inline-block">
      <video src={coin} autoPlay loop muted className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col text-center">
        <h2 className="text-[5rem] font-medium"> +2,000 Swaps</h2>
        <p className="text-[1rem]">completed on the decentralized RetoSwap network.</p>
      </div>
    </div>
  );
}
