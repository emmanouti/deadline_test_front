import React, {useState} from 'react';
import SubscribingFormView from "./SubscribingForm.View";
import axios from "axios";

const defaultValues= {
    pseudo: "",
    surname: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    password: ""
}

const SubscribingForm = ({setToken, setUser}) => {
    const [formValues, setFormValues] = useState(defaultValues);
    function createProfile() {
        axios.post('http://localhost:8000/newUser',
            {
                pseudo: formValues.pseudo,
                surname: formValues.surname,
                name: formValues.name,
                phone: formValues.phone,
                address: formValues.address,
                email: formValues.email,
                password: formValues.password
            }
        )
            .then(function (response) {
                setToken(response.data.token)
                setUser(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createProfile()
    };
    return (
       <div>
           <SubscribingFormView formValues={formValues} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
       </div>
    )
}

export default SubscribingForm;