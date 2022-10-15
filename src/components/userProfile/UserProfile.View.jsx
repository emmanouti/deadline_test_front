import { Box, Button } from "@mui/material";

const UserProfileView = ({user}) => {
    return (
        <Box>
            <h2>Bienvenue {user.name}</h2>
            <h3>Profil :</h3>
            <p></p>
            <Button type="">Modifier</Button>
        </Box>
    )
}

export default UserProfileView;