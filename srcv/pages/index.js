import Head from "next/head";
import ImageSliders from "@/components/Navigation Bars/ImageSliders";
import GWCardLayout from "@/components/GW Card Layout/GWCardLayout";
import ProductsSlider from "@/components/Products Slider Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon.in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageSliders />
      <GWCardLayout />

      <ProductsSlider />
    </>
  );
}
