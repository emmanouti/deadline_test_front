import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const token= localStorage.getItem('x-access-token');
        return token
    }
    const [token, setToken] = useState(getToken());
    const saveToken = (userToken) => {
        localStorage.setItem('x-access-token', userToken);
        setToken(userToken)
    }
    return {
        setToken: saveToken,
        token
    }
}