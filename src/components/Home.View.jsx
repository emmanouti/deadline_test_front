import SubscribingForm from './subscribe/SubscribingForm';
import {Box, Paper, Typography} from "@mui/material";
import Login from "./login/Login";
import React from "react";
import Construction from "../img/construction.jpg";
import theme from "../Theme/theme";
import Logo from "../img/Logo.png";

const styles = {
    container: {
        backgroundImage: `url(${Construction})`,
        height: '100vh'
    },
    titleContainer: {
        padding: 10,
        display: 'flex',
        justifyContent: "space-evenly",
        marginBottom: 5
    },
    logo: {
        height: "80px",
        width: "80px"
    }
};

const HomeView = ({setToken, setUser, setUserId}) => {
    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <img style={styles.logo} src={Logo} alt="Logo" />
                <Typography variant="h3" color={theme.palette.secondary.light} >Bienvenue sur notre portail de connexion</Typography>
            </div>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <Paper sx={{width: 550, height: 450, display: "flex", justifyContent: "center"}}>
                    <SubscribingForm setToken={setToken} setUser={setUser} />
                </Paper>
                <Paper sx={{width: 400, height: 450, display: "flex", alignContent: "center", flexDirection: "column"}}>
                    <Login setToken={setToken} setUser={setUser} setUserId={setUserId} />
                </Paper>
            </Box>
        </div>
        )
}

export default HomeView;
