import React from "react";
import SignIn from '../../components/signIn'
import SignUp from '../../components/singUp'

const Auth = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                maxWidth: "1000px",
                margin: "0 auto",
                paddingTop: "30px",
            }}
        >
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Auth;
