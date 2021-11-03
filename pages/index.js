import Head from "next/head";
import Carousel from "../component/carousel/index";

import Landing from "../component/landing/index";
export default function Home() {
  return (
    <>
      <Carousel />
      <Landing />
    </>
  );
}
