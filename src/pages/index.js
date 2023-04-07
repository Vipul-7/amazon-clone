import NavBelt from "@/components/Navigation Bars/NavBelt";
import Head from "next/head";
import NavBarMain from "@/components/Navigation Bars/NavBarMain";
import SideNavigation from "@/components/Navigation Bars/SideNavigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideNavigation />
      <NavBelt />
      <NavBarMain />
    </>
  );
}

