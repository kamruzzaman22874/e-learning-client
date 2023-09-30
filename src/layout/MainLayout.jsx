import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;