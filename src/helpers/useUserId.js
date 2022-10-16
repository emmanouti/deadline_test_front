import { useState } from 'react';

export default function useUserId() {
    const getUserId = () => {
        const userId = localStorage.getItem('user-id');
        return userId
    }
    const [userId, setUserId] = useState(getUserId());
    const saveUserID = (userID) => {
        localStorage.setItem('user-id', userID);
        setUserId(userID)
    }
    return {
        setUserId: saveUserID,
        userId
    }
}