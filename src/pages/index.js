import NavBelt from "@/components/Navigation Bars/NavBelt";
import Head from "next/head";
import NavBarMain from "@/components/Navigation Bars/NavBarMain";
import SideNavigation from "@/components/Navigation Bars/SideNavigation";
import ImageSliders from "@/components/Navigation Bars/ImageSliders";
import GWCardLayout from "@/components/GW Card Layout/GWCardLayout";
import ProductsSlider from "@/components/Products Slider Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SideNavigation />
      <NavBelt />
      <NavBarMain /> */}
      <ImageSliders />
      <GWCardLayout />

      <ProductsSlider />
    </>
  );
}
