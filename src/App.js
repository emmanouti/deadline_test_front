import React, {useState} from 'react';
import UserProfile from "./components/userProfile/UserProfile";
import HomeView from "./components/Home.View";
import useToken from "./helpers/useToken";
import useUserId from "./helpers/useUserId";
import {Box, Button, Container} from "@mui/material";
import Construction from "./img/construction.jpg";
import Logo from "./img/Logo.png";

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

function App() {
    const {token, setToken} = useToken();
    const [user, setUser] = useState();
    const {userId, setUserId} = useUserId()
    console.log(user)
    if (!token) {
        return <HomeView setToken={setToken} setUser={setUser} setUserId={setUserId}/>
    }
    function handleLogOut() {
        setUser()
        setToken()
    }
    console.log(user)
    return (
            <div style={styles.container}>
                <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                    <div style={styles.titleContainer}>
                        <img style={styles.logo} src={Logo} alt="Logo" />
                    </div>
                        <Box sx={{padding: 2}}>
                            {token ? <Button variant="contained" onClick={handleLogOut}>Se déconnecter</Button> : null}
                        </Box>
                </Container>
                <Container sx={{display: 'flex', alignContent: "center", width: "100%"}}>
                    <UserProfile user={user} setUser={setUser} handleLogOut={handleLogOut} token={token} userId={userId} />
                </Container>
            </div>
    );
}

export default App;
