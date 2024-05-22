"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedComponent = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        duration={2.75}
        decimals={2}
        decimal="."
        prefix="Rs. "
        end={amount}
      />
    </div>
  );
};

export default AnimatedComponent;
