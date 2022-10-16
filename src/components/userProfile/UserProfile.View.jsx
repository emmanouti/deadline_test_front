import {Box, Grid, Typography} from "@mui/material";
import ModifyModal from "./ModifyModal";
import DeleteModal from "./DeleteModal";

const UserProfileView = ({user, onClickDelete, handleSubmit, handleInputChange, formModifyValues}) => {
    return (
        <Box>
            <h2>Bienvenue {user.name} !</h2>
                    <Typography sx={{ mt: 5, mb: 2 }} variant="h5" component="div">
                        Votre Profil :
                    </Typography>
                <Grid item xs={10} md={4}>
                    <Typography>Pseudo: {user.pseudo}</Typography>
                    <Typography>Nom de famille: {user.surname}</Typography>
                    <Typography>Prénom: {user.name}</Typography>
                    <Typography>Téléphone: {user.phone}</Typography>
                    <Typography>Adresse: {user.address}</Typography>
                    <Typography>Email: {user.email}</Typography>
                </Grid>
            <ModifyModal handleSubmit={handleSubmit} handleInputChange={handleInputChange} formModifyValues={formModifyValues} />
            <DeleteModal onClick={onClickDelete} />
        </Box>
    )
}

export default UserProfileView;