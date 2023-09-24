import React, { useEffect, useState } from "react";
import styles from "./CardButtonAndAdItem.module.scss";
import Button from "../Layouts/Button";
import YellowButton from "../Layouts/YellowButton";
import { useDispatch, useSelector } from "react-redux";
import isValidTokenExpiry from "@/util/isValidTokenExpiry";
import { useRouter } from "next/router";

const CardButtonAndAdItem = (props) => {
  const router = useRouter();
  const userName = useSelector((state) => state.auth.userName);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const dispatch = useDispatch();

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
      <>
        <h2>{props.title}</h2>
        <YellowButton
          text={props.buttonText}
          onClick={() => router.push("/auth/login")}
        />
      </>
    );
  } else {
    accountContent = (
      <>
        <h2>Welcome to Amazon {userName}</h2>
        <YellowButton
          text="Buy watches with available offers"
          onClick={() => router.push("/watches")}
        />
      </>
    );
  }

  return (
    <section className={styles.main}>
      <section className={styles.container}>{accountContent}</section>
      <section className={styles["ad-item"]}>
        <img src={props.image} />
      </section>
    </section>
  );
};

export default CardButtonAndAdItem;
