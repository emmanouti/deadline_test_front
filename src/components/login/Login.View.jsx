import React from 'react';
import {Box, Button, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

const LoginView = ({loginValues, handleInputChange, handleSubmit}) => {
    return (
        <Box sx={{backgroundColor:"secondary.main", padding:2, borderRadius: "20px"}}>
            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                </InputLabel>
                <Input
                    id="input-login-email"
                    type="text"
                    name="email"
                    value={loginValues.email}
                    onChange={handleInputChange}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
                <TextField
                    required
                    id="password-login-input"
                    label="Mot de passe"
                    name="password"
                    type="text"
                    value={loginValues.password}
                    onChange={handleInputChange}
                />
                <Button type="submit">Valider</Button>
            </form>
        </Box>
    )
}

export default LoginView;