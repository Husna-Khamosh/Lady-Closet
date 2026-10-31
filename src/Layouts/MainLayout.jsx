import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout({ onCategoryChange }) {

    const location = useLocation();

    return (
        <>
            <Header
                onCategoryChange={onCategoryChange}
                showCategories={location.pathname === "/"}
            />

            <Outlet />
        </>
    );
}

export default MainLayout;