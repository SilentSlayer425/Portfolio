import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { NextPageNudge } from "@/components/NextPageNudge";

const Work = () => (
  <>
    <FeaturedWork />
    <NextPageNudge to="/connect" hint="Next" label="Let's Connect" />
  </>
);

export default Work;
