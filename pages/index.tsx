import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
const TestComponent = dynamic(() => import("../src/components/TestComponent"));
const TestComponent2 = dynamic(
  () => import("../src/components/TestComponent2")
);
const TestComponent3 = dynamic(
  () => import("../src/components/TestComponent3")
);
const TestComponent4 = dynamic(
  () => import("../src/components/TestComponent4")
);
const TestComponent5 = dynamic(
  () => import("../src/components/TestComponent5")
);
const DyanamicSection = dynamic(
  () => import("../src/components/DynamicSection")
);

const Home: NextPage = () => {
  return (
    <div>
      <DyanamicSection bg={"skyblue"} num={"1"} prefetch>
        <TestComponent />
      </DyanamicSection>
      <DyanamicSection bg={"black"} num={"2"}>
        <TestComponent2 />
      </DyanamicSection>
      <DyanamicSection bg={"orange"} num={"3"}>
        <TestComponent3 />
      </DyanamicSection>
      <DyanamicSection bg={"red"} num={"4"}>
        <TestComponent4 />
      </DyanamicSection>
      <DyanamicSection bg={"green"} num={"5"}>
        <TestComponent5 />
      </DyanamicSection>
    </div>
  );
};

export default Home;
