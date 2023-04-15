import React from "react";
import NavBelt from "../Navigation Bars/NavBelt";
import NavBarMain from "../Navigation Bars/NavBarMain";
import SideNavigation from "../Navigation Bars/SideNavigation";

const FixedLayoutHeaders = (props) => {
  return (
    <div>
      <SideNavigation />
      <NavBelt />
      <NavBarMain />
      <main>{props.children}</main>
    </div>
  );
};

export default FixedLayoutHeaders;
