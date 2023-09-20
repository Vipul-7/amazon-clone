import SignupOrLoginPage from "@/components/auth/SignupOrLoginPage";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupOrLoginPage signup={false} login={true} />
    </>
  );
};
export default Login;
