import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const noNavBar =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noNavBar || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noNavBar || <Footer></Footer>}
    </div>
  );
};

export default Main;
