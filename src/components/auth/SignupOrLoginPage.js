import React, { useState } from "react";
import AmazonLogo from "../Icons/AmazonLogo";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { authSliceActions } from "@/store/auth-slice";

import styles from "./SignupOrLoginPage.module.scss";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const SignupOrLoginPage = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isSendingSignupData, setIsSendingSignupData] = useState(false);
  const [isSendingLoginData, setIsSendingLoginData] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const signupFormSubmitHandler = async (values) => {
    setIsSendingSignupData(true);

    const userData = {
      firstName: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json(); // Parse the JSON response
        setSignupError(errorData.message);
        throw new Error("Something went wrong!");
      }

      router.replace("/auth/login");
    } catch (error) {
      console.log(error);
    }

    setIsSendingSignupData(false);
  };

  const loginFormSubmitHandler = async (values) => {
    setIsSendingLoginData(true);

    const userData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json(); // Parse the JSON response
        setLoginError(errorData.message);
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      localStorage.setItem("token", responseData.token);
      dispatch(
        authSliceActions.setToken({
          token: responseData.token,
          userId: responseData.userId,
          userName: responseData.userName,
        })
      );

      router.replace("/");
    } catch (error) {
      console.log(error);
    }

    setIsSendingLoginData(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <AmazonLogo />
        <span>.in</span>
      </div>
      {props.signup && (
        <SignupForm
          onSubmit={signupFormSubmitHandler}
          isSending={isSendingSignupData}
          errorMessage={signupError}
          onRedirect={() => router.replace("/auth/login")}
        />
      )}

      {props.login && (
        <LoginForm
          onSubmit={loginFormSubmitHandler}
          isSending={isSendingLoginData}
          errorMessage={loginError}
          onRedirect={() => router.replace("/auth/signup")}
        />
      )}
    </main>
  );
};

export default SignupOrLoginPage;
