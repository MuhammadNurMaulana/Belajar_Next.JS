import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LoginPage = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };
  return (
    <div>
      <div>LoginPage</div>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        Belum punya akun ? <Link href={"/auth/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
