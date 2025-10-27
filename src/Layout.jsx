import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Layout = () => {
  return (
    <div id="content">
      <Header />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
