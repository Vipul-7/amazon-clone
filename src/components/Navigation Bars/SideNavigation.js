import { useSelector, useDispatch } from "react-redux";

import SideNavigationModal from "../Layouts/SideNavigationModal";
import { modalsActions } from "@/store/modals-slice";

import styles from "./SideNavigation.module.scss";
import ProfileIcon from "../Icons/ProfileIcon";
import WithArrowText from "./Side Navigation/WithArrowText";
import CloseIcon from "../Icons/CloseIcon";

const SideNavigation = () => {
  const userName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();

  const showSideNavigationBar = useSelector(
    (state) => state.modals.showSideNavigation
  );

  const hideSideNavigationBar = () => {
    dispatch(modalsActions.showSideNavigation());
  };

  return (
    <>
      {showSideNavigationBar && (
        <main className={styles.main}>
          <button
            className={styles["main-close"]}
            onClick={hideSideNavigationBar}
          >
            <CloseIcon />
          </button>

          <SideNavigationModal onClose={hideSideNavigationBar}>
            <div className={styles.top}>
              <ProfileIcon />
              <span>Hello, {userName ? userName : "Sign in"}</span>
            </div>
            <div className={styles.nav}>
              <section className={styles["nav-first"]}>
                <h4>Trending</h4>
                <p>Best Sellers</p>
                <p>New Releases</p>
                <p>Movers and Shakers</p>
              </section>
              <section>
                <h4>Digital Content And Devices</h4>
                <WithArrowText text="Echo & Alexa" />
                <WithArrowText text="Fire TV" />
                <WithArrowText text="Kindle E-Readers & eBooks" />
                <WithArrowText text="Audible Audiobooks" />
                <WithArrowText text="Amazon Prime Video" />
                <WithArrowText text="Amazon Prime Music" />
              </section>
              <section>
                <h4>Shop By Category</h4>
                <WithArrowText text="Mobiles, Computers" />
                <WithArrowText text="TV, Appliances, Electronics" />
                <WithArrowText text="Men's Fashion" />
                <WithArrowText text="Women's Fashion" />
                {/* <WithArrowText props="" /> */}
              </section>
              <section>
                <h4>Programs & Features</h4>
                <WithArrowText text="Gift Cards & Mobile Recharges" />
                <p>Flight Tickets</p>
                <p>Clearance store</p>
              </section>
              <section>
                <h4>Help & Settings</h4>
                <p>Your Account</p>
                <p>Customer Service</p>
                <p>Sign in</p>
              </section>
            </div>
          </SideNavigationModal>
        </main>
      )}
    </>
  );
};

export default SideNavigation;
