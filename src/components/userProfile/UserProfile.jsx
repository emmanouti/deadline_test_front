import React, {useState} from 'react';
import UserProfileView from "./UserProfile.View";
import axios from "axios";

const UserProfile = () => {
    const [user, setUser] = useState({})
    function getProfile() {
        axios.get("http://localhost:8000/user/:userID")
            .then((response) => response.data)
            .then((data) => {
                setUser(data);
            });
    }
    return (
        <UserProfileView user={user} />
    )
}

export default UserProfile;