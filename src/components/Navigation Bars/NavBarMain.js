import { useDispatch } from "react-redux";
import { modalsActions } from "@/store/modals-slice";

import Image from "next/image";
import styles from "./NavBarMain.module.scss";
import DrowDownIcon from "../Icons/DrowDownIcon";
import MenuIcon from "../Icons/MenuIcon";

const NavBarMain = () => {
  const dispatch = useDispatch();

  const showUserNavigationModalHandler = () => {
    dispatch(modalsActions.showSideNavigation());
  };

  return (
    <nav className={styles.nav}>
      <div className={styles["nav-left"]}>
        <button
          className={styles["nav-left__button"]}
          onClick={showUserNavigationModalHandler}
        >
          <MenuIcon />
          <span>All</span>
        </button>
      </div>

      <div className={styles["nav-center"]}>
        <div>
          <span>Amazon miniTV</span>
        </div>
        <div>
          <span>Sell</span>
        </div>
        <div>
          <span>Best Sellers</span>
        </div>
        <div>
          <span>Mobiles</span>
        </div>
        <div>
          <span>Today&apos;s Deals</span>
        </div>
        <div>
          <span>Customer Service</span>
        </div>
        <div>
          <span>Electronics</span>
        </div>
        <div className={styles["nav-center__prime"]}>
          <span>Prime</span>
          <span>
            <DrowDownIcon />
          </span>
        </div>

        <div>
          <span>New Releases</span>
        </div>
        <div>
          <span>Amazon Pay</span>
        </div>
      </div>

      <div className={styles["nav-right"]}>
        <Image
          src="/Images/prime_ad.jpg"
          width={400}
          height={39}
          alt="ad image"
        />
      </div>
    </nav>
  );
};

export default NavBarMain;
