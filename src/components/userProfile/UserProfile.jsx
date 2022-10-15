import React from 'react';
import UserProfileView from "./UserProfile.View";


const UserProfile = ({user}) => {
    return (
        <UserProfileView user={user} />
    )
}

export default UserProfile;