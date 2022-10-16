import React, {useState} from 'react';
import UserProfileView from "./UserProfile.View";
import apiClient from "../../configs/configAxios";


const UserProfile = ({user, handleLogOut, setUser, token, userId}) => {
    function getProfile() {
        const user = userId.toString()
        apiClient.get(`/user/${user}`,
            {
                headers: {
                    'x-access-token': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                setUser(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    if (!user) {
        getProfile()
    }
    const [formModifyValues, setFormModifyValues] = useState({address: user.address, email: user.email});
    function modifyProfile() {
        apiClient.put(`/user/${user._id}`,
            {
                address: formModifyValues.address,
                email: formModifyValues.email,
            },
            {
                headers: {
                    'x-access-token': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                setUser(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormModifyValues({
            ...formModifyValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        modifyProfile()
    };
    function onClickDelete() {
        apiClient.delete(`http://localhost:8000/user/${user._id}`,
        {
            headers: {
                'x-access-token': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }
        })
            .then(
                handleLogOut()
            )
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <UserProfileView user={user} onClickDelete={onClickDelete} handleSubmit={handleSubmit} handleInputChange={handleInputChange} formModifyValues={formModifyValues} />
    )
}

export default UserProfile;