import React from 'react';
import UserProfileView from "./UserProfile.View";
import axios from "axios";


const UserProfile = ({user, handleLogOut}) => {
    function onClickDelete() {
        axios.delete(`http://localhost:8000/user/${user._id}`)
            .then(
                handleLogOut()
            )
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <UserProfileView user={user} onClickDelete={onClickDelete} />
    )
}

export default UserProfile;