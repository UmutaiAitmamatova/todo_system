import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { NoPage } from "../components";
import { user } from "../components/core/api";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Home = React.lazy(() => import("../pages/home"));
const Admin = React.lazy(() => import("../pages/admin")); 
const Auth = React.lazy(() => import("../pages/auth")); 

const Router = () => {
    const locat = useLocation();
    const [state, setstate] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('auth')
        }
      }, [user])

    useEffect(() => {
        if (locat.pathname === "/auth") {
            setstate(true);
        } else {
            setstate(false);
        }
    }, [locat]);

    return (
        <>
            {!state && <Header/>}

            <Routes>
                <Route path="auth" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <Auth />
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

                <Route path="*" element={<NoPage/>} />

            </Routes>
            {!state && <Footer/>}
        </>
    )
};

export default Router;
