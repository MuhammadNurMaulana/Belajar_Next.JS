import { AppShellProps } from "@/types/type";
import Footer from "../Footer";
import Navbar from "../Navbar";

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppShell;
