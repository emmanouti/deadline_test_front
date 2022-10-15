import { Box } from "@mui/material";

const UserProfileView = (user) => {
    return (
        <Box>
            <p>Hello {user.name}</p>
        </Box>
    )
}

export default UserProfileView;