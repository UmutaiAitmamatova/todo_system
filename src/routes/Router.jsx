import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
// import { Home, Admin, SignUp, SignIn } from "../pages";

const Home = React.lazy(() => import("../pages/home"));
const Admin = React.lazy(() => import("../pages/admin")); 
const SignUp = React.lazy(() => import("../pages/singUp")); 
const SignIn = React.lazy(() => import("../pages/signIn")); 

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

            <Routes>
                <Route path="/signIn" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <SignIn />
                    </React.Suspense>}
                    exact/>
            </Routes>

            <Routes>
                <Route path="/signUp" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <SignUp />
                    </React.Suspense>}
                    exact/>
            </Routes>
            <Footer/>
        </>
    )
};

export default Router;
