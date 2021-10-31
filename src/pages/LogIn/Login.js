import Button from '@restart/ui/esm/Button';
import React from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import icon from '../../image/google.png';

const Login = () => {
    const {googleSignIn} = useFirebase();
    return (
        <div className="container my-5 py-2">
            <h1 className="mb-5">Log In Our Web Application And Stay With Us</h1>
            <div className="d-flex justify-content-around align-items-center">
                <div className="shadow-lg p-3 mb-5 bg-body rounded">
                    <Button onClick={googleSignIn} className="form-control p-5"><img width="40" src={icon} alt="" /> Log In by Google</Button>
                </div>
                <div className="shadow-lg p-3 mb-5 bg-body rounded">
                    <img height="450" src="https://image.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg" alt="login_image" />
                </div>
            </div>
        </div>
    );
};

export default Login;