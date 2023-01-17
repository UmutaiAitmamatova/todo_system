import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../layouts/Header";
// import { Home, Admin, SignUp, SignIn } from "../pages";

const Home = React.lazy(() => import("../pages/home"));
const Admin = React.lazy(() => import("../pages/admin")); 

const Router = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <Home />
                    </React.Suspense>}
                    exact/>
            </Routes>
            
            <Routes>
                <Route path="/admin" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <Admin />
                    </React.Suspense>}
                    exact/>
            </Routes>
        </>
    )
};

export default Router;
