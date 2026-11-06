import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout({ onCategoryChange, isLoggedIn, onLogout, currentUser }) {

    const location = useLocation();

    return (
        <>
            <Header
                onCategoryChange={onCategoryChange}
                showCategories={location.pathname === "/"}
                isLoggedIn={isLoggedIn}
                onLogout={onLogout}
                currentUser={currentUser}
            />

            <Outlet />
        </>
    );
}

export default MainLayout;