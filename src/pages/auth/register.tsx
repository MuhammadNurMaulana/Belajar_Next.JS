import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const handeSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Invalid email or password" : "Something went wrong");
    }
  };
  return (
    <div>
      <div>RegisterPage</div>
      {error && <p>{error}</p>}
      <form onSubmit={handeSubmit}>
        <label htmlFor="fullname">Fullname</label>
        <input type="text" id="fullname" name="fullname" placeholder="Fullname" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "...Loading" : "Register"}
        </button>
      </form>
      <p>
        sudah punya akun ? <Link href={"/auth/login"}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
