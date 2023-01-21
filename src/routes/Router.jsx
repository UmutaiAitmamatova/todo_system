import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
// import { Home, Admin, SignUp, SignIn } from "../pages";

const Home = React.lazy(() => import("../pages/home"));
const Admin = React.lazy(() => import("../pages/admin")); 
const SignUp = React.lazy(() => import("../pages/singUp")); 
const SignIn = React.lazy(() => import("../pages/signIn")); 

const Router = () => {
    const locat = useLocation();
    const [state, setstate] = useState(false);

    useEffect(() => {
        if (locat.pathname === "/signUp" || locat.pathname === "/signIn") {
            setstate(true);
        } else {
            setstate(false);
        }
    }, [locat]);

    return (
        <>
            {!state && <Header/>}
            <Routes>

                <Route path="signIn" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <SignIn />
                    </React.Suspense>}
                exact/>

                <Route path="signUp" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <SignUp />
                    </React.Suspense>}
                exact/>

                <Route path="/" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <Home />
                    </React.Suspense>}
                exact/>

                <Route path="admin" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <Admin />
                    </React.Suspense>}
                exact/>

            </Routes>
            {!state && <Footer/>}
        </>
    )
};

export default Router;
