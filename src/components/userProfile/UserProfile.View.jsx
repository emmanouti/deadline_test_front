import {Box, Paper, Typography} from "@mui/material";
import ModifyModal from "./ModifyModal";
import DeleteModal from "./DeleteModal";
import React from "react";

const styles = {
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        marginTop: 5
    }
}

const UserProfileView = ({user, onClickDelete, handleSubmit, handleInputChange, formModifyValues}) => {
    return (
            <Paper sx={{width: "50%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Box sx={{padding: 2, width: "100%", display: "flex", flexDirection: 'column', alignItems: "center"}}>
                    <Typography variant="h5">Bienvenue {user.name} !</Typography>
                    <Typography sx={{ mt: 5, mb: 2 }} variant="h5" component="div">
                                Votre profil :
                    </Typography>
                    <Typography>Pseudo: {user.pseudo}</Typography>
                    <br/>
                    <Typography>Nom de famille: {user.surname}</Typography>
                    <br/>
                    <Typography>Prénom: {user.name}</Typography>
                    <br/>
                    <Typography>Téléphone: {user.phone}</Typography>
                    <br/>
                    <Typography>Adresse: {user.address}</Typography>
                    <br/>
                    <Typography>Email: {user.email}</Typography>
                    <div style={styles.buttonContainer}>
                        <ModifyModal handleSubmit={handleSubmit} handleInputChange={handleInputChange} formModifyValues={formModifyValues} />
                        <DeleteModal onClick={onClickDelete} />
                    </div>

                </Box>
            </Paper>
    )
}

export default UserProfileView;