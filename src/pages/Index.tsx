import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { NextPageNudge } from "@/components/NextPageNudge";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <NextPageNudge to="/journey" hint="Next" label="The Journey →" />
    </>
  );
};

export default Index;
