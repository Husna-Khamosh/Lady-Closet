import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout({ cartCount, onCategoryChange }) {

    const location = useLocation();

    return (
        <>
            <Header
                cartCount={cartCount}
                onCategoryChange={onCategoryChange}
                showCategories={location.pathname === "/"}
            />

            <Outlet />
        </>
    );
}

export default MainLayout;