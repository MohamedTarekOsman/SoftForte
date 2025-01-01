import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
