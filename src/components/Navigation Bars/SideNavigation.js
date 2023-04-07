import { useSelector, useDispatch } from "react-redux";

import SideNavigationModal from "../Layouts/SideNavigationModal";
import { modalsActions } from "@/store/modals-slice";

import styles from './SideNavigation.module.scss';

const SideNavigation = () => {
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
        <SideNavigationModal onClose={hideSideNavigationBar}>
          <div className={styles.top}></div>
        </SideNavigationModal>
      )}
    </>
  );
};

export default SideNavigation;
