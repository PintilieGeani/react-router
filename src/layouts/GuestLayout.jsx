import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import AppFooter from "../components/AppFooter.jsx";

const Guestlayout = () => {
    return(
        <>
        <AppHeader />
        <Outlet />
        <AppFooter />
        </>
    )
}

export default Guestlayout