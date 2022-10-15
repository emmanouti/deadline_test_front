import SubscribingForm from './subscribe/SubscribingForm';
import { Box } from "@mui/material";
import Login from "./login/Login";

const HomeView = ({setToken}) => {
    return (
        <div>
            <h1>Bienvenue !</h1>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Box>
                    <h2>Nouveau sur le site ?</h2>
                    <SubscribingForm setToken={setToken} />
                </Box>
                <Box>
                    <h2>Vous possédez déjà un compte ?</h2>
                    <Login setToken={setToken}/>
                </Box>
            </Box>
        </div>
        )
}

export default HomeView;
