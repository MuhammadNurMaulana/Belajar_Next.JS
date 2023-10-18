import { signIn, useSession, signOut } from "next-auth/react";
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className="navbar">
      <div>Navbar</div>
      <div>{data && data.user.fullname}</div>
      {data ? <button onClick={() => signOut()}>Sign Out</button> : <button onClick={() => signIn()}>Sign In</button>}
    </div>
  );
};

export default Navbar;
