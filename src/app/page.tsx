import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Hero01 = () => {
  return (
    <div className="mt-50 mb-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Todolist Application
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore, delectus voluptates vel necessitatibus sunt quibusdam! Ut fugiat quas expedita eius, hic tempore amet asperiores suscipit? Fugiat architecto sint rerum?
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started <ArrowUpRight className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
