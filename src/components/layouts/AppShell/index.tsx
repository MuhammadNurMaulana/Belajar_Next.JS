import { AppShellProps } from "@/types/type";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

const AppShell = ({ children }: AppShellProps) => {
  const { pathname } = useRouter();
  const disableNavbar = ["/auth/login", "/auth/register", "/404"];
  return (
    <div>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {!disableNavbar.includes(pathname) && <Footer />}
    </div>
  );
};

export default AppShell;
