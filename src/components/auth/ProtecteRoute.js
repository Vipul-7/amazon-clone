import isValidTokenExpiry from "@/util/isValidTokenExpiry";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProtecteRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isValidTokenExpiry(localStorage.getItem("token"))) {
      // expiration time wise
      setIsLoggedIn(true);
    } else {
      router.replace("/auth/login");
    }
  }, []);

  return isLoggedIn && props.children;
};

export default ProtecteRoute;
