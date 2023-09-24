import styles from "./NavBelt.module.scss";
import Image from "next/image";
import AmazonLogo from "../Icons/AmazonLogo";
import LocationIcon from "../Icons/LocationIcon";
import SearchIcon from "../Icons/SearchIcon";
import DrowDownIcon from "../Icons/DrowDownIcon";
import CartMain from "../Icons/CartMain";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import isValidTokenExpiry from "@/util/isValidTokenExpiry";
import { authSliceActions } from "@/store/auth-slice";
import { useEffect, useState } from "react";

const NavBelt = () => {
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const userName = useSelector((state) => state.auth.userName);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsTokenValid(false);
    dispatch(authSliceActions.clearToken());
  };

  useEffect(() => {
    if (isValidTokenExpiry(localStorage.getItem("token"))) {
      setIsTokenValid(true);
    } else {
      setIsTokenValid(false);
    }
  }, [isTokenValid]);

  let accountContent;

  if (!isTokenValid) {
    accountContent = (
      <div className={styles.toolTip}>
        <div className={styles.links}>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup">Signup</Link>
        </div>
      </div>
    );
  } else {
    accountContent = (
      <div className={styles.toolTip}>
        <div className={styles.links}>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <nav className={styles.nav}>
      <div className={styles["nav-left"]}>
        <Link href="/">
          <div className={styles["nav-left__logo"]}>
            <AmazonLogo />
            <h4 className={styles["nav-left__logo-text"]}>.in</h4>
          </div>
        </Link>

        <div className={styles["nav-left__location"]}>
          <span>
            <LocationIcon />
          </span>
          <div className={styles["nav-left__location-texts"]}>
            <p>Hello</p>
            <h3>Select your address</h3>
          </div>
        </div>
      </div>

      <form className={styles["nav-form"]}>
        <div className={styles["nav-form__dropdown"]}>
          <select>
            <option>All</option>
          </select>
        </div>
        <div className={styles["nav-form__search-input"]}>
          <input type="text" placeholder="Search Amazon.in" />
        </div>
        <div className={styles["nav-form__search-button"]}>
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>

      <div className={styles["nav-right"]}>
        <section className={styles["nav-right__lang"]}>
          <span>
            <Image src="/flag.png" width={20} height={20} alt="flag" />
          </span>
          <span>EN</span>
          <span>
            <DrowDownIcon />
          </span>
        </section>

        <section className={styles["nav-right__signIn-main"]}>
          <div className={styles["nav-right__signIn-main-navText"]}>
            {/* <Link href="/auth/login" className={styles["nav-right__signIn-main"]}> */}
            <div className={styles["nav-right__signIn"]}>
              <span className={styles["nav-right__signIn-text1"]}>
                Hello, {userName ? userName : "Sign in"}
              </span>
              <span className={styles["nav-right__signIn-text2"]}>
                Account & Lists
              </span>
            </div>
            <DrowDownIcon />
          </div>
          {accountContent}
          {/* </Link> */}
        </section>

        <section className={styles["nav-right__orders"]}>
          <span className={styles["nav-right__orders-returns"]}>Returns</span>
          <span className={styles["nav-right__orders-child"]}>& Orders</span>
        </section>

        <Link href="/cart" className={styles["nav-right__cart"]}>
          <div className={styles["nav-right__cart-detail"]}>
            <span className={styles["nav-right__cart-detail-number"]}>{0}</span>
            <span className={styles["nav-right__cart-detail-icon"]}>
              <CartMain />
            </span>
          </div>
          <span className={styles["nav-right__cart-text"]}>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBelt;
