import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { NextPageNudge } from "@/components/NextPageNudge";

const Journey = () => (
  <>
    <Skills />
    <Experience />
    <NextPageNudge to="/work" hint="Next" label="Selected Work →" />
  </>
);

export default Journey;
