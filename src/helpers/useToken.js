import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('x-access-token');
        return tokenString
    }
    const [token, setToken] = useState(getToken());
    const saveToken = (userToken) => {
        sessionStorage.setItem('x-access-token', userToken);
        setToken(userToken)
    }
    return {
        setToken: saveToken,
        token
    }
}