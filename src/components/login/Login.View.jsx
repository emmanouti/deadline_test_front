import React from 'react';
import {Box, Input, InputAdornment, InputLabel} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

const LoginView = () => {
    return (
        <Box sx={{backgroundColor:"secondary.main", padding:2, borderRadius: "20px"}}>
            <form>
                <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                </InputLabel>
                <Input
                    id="input-login-email"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </form>
        </Box>
    )
}

export default LoginView;