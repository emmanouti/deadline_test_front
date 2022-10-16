import React, { useState } from 'react';
import LoginView from "./Login.View";
import apiClient from "../../configs/configAxios";

const defaultLoginValues = {
    email: "",
    password: ""
}
const Login = ({setToken, setUser, setUserId}) => {
    const [loginValues, setLoginValues] = useState(defaultLoginValues)
    function loginUser() {
        apiClient.post("/login",
            {
                email: loginValues.email,
                password: loginValues.password
            })
            .then(function (response) {
                setToken(response.data.token);
                setUser(response.data.user)
                setUserId(response.data.user._id)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginValues({
            ...loginValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser()
    };
    return (
        <>
            <LoginView loginValues={loginValues} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
        </>
    )
}

export default Login;