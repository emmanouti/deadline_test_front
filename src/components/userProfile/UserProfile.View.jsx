import {Box, Button, Grid, Typography} from "@mui/material";

const UserProfileView = ({user, onClickDelete}) => {
    return (
        <Box>
            <h2>Bienvenue {user.name} !</h2>
                    <Typography sx={{ mt: 5, mb: 2 }} variant="h5" component="div">
                        Profil :
                    </Typography>
                <Grid item xs={10} md={4}>
                    <Typography>Pseudo: {user.pseudo}</Typography>
                    <Typography>Nom de famille: {user.surname}</Typography>
                    <Typography>Prénom: {user.name}</Typography>
                    <Typography>Téléphone: {user.phone}</Typography>
                    <Typography>Adresse: {user.address}</Typography>
                    <Typography>Email: {user.email}</Typography>
                </Grid>
            <Button type="">Modifier</Button>
            <Button onClick={onClickDelete}>Supprimer</Button>
        </Box>
    )
}

export default UserProfileView;