import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

function MainLayout({ onCategoryChange, isLoggedIn, onLogout, currentUser }) {

    return (
        <>
            <Header
                onCategoryChange={onCategoryChange}
                showCategories={true}
                isLoggedIn={isLoggedIn}
                onLogout={onLogout}
                currentUser={currentUser}
            />

            <Outlet />
        </>
    );
}

export default MainLayout;