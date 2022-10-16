import React from 'react';
import {Box, Button, Input, InputAdornment, InputLabel, TextField, Typography} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

const styles = {
    login: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 1,
        height: "100%"
    }
};

const LoginView = ({loginValues, handleInputChange, handleSubmit}) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", padding:4, height: "100%" }}>
            <Box>
                <Typography variant="h4">Vous possédez déjà un compte ?</Typography>
            </Box>
                <form onSubmit={handleSubmit}>
                    <div style={styles.login}>
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
                        <br/>
                            <TextField
                                required
                                id="password-login-input"
                                label="Mot de passe"
                                name="password"
                                type="text"
                                value={loginValues.password}
                                onChange={handleInputChange}
                            />
                        <br/>
                            <Button type="submit" sx={{padding:2}}>Valider</Button>
                    </div>
                </form>
        </Box>
    )
}

export default LoginView;