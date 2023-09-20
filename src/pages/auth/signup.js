import SignupOrLoginPage from "@/components/auth/SignupOrLoginPage";
import Head from "next/head";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Create Account | Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupOrLoginPage signup={true} login={false} />
    </>
  );
};
export default Signup;