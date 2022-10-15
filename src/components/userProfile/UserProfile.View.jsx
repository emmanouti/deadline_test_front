import { Box } from "@mui/material";

const UserProfileView = ({user}) => {
    return (
        <Box>
            <h2>Bienvenue {user.name}</h2>
        </Box>
    )
}

export default UserProfileView;