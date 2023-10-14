import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div>RegisterPage</div>;
      <p>
        sudah punya akun ? <Link href={"/auth/login"}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
