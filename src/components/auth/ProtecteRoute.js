import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const jwt = require("jsonwebtoken");

const ProtecteRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
      return;
    }

    const { exp } = jwt.decode(token); // Decode the token to get its expiration time

    const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Get current time in seconds

    const tokenExpirationInSeconds = exp;

    const remainingTimeInSeconds =
      tokenExpirationInSeconds - currentTimeInSeconds; // Remaining time in seconds

    if (remainingTimeInSeconds <= 0) {
      dispatch(authSliceActions.clearToken());
      localStorage.removeItem("token");
      router.push("/auth/login");
      return;
    }

    setIsLoggedIn(true);
  }, []);

  return isLoggedIn && props.children;
};

export default ProtecteRoute;
