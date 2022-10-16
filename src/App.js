import React, {useState} from 'react';
import UserProfile from "./components/userProfile/UserProfile";
import HomeView from "./components/Home.View";
import useToken from "./helpers/useToken";
import {Button, Grid} from "@mui/material";

function App() {
    const {token, setToken} = useToken();
    const [user, setUser] = useState();
    console.log(user)
    if (!token) {
        return <HomeView setToken={setToken} setUser={setUser}/>
    }
    function handleLogOut() {
        setUser()
        setToken()
    }
    console.log(user)
    return (
            <div>
                <Grid container>
                    <Grid item sx={{display: 'flex'}}>
                        <h1>Application</h1>
                    </Grid>
                    <Grid item>
                        {token ? <Button onClick={handleLogOut}>Se déconnecter</Button> : null}
                    </Grid>
                </Grid>
                <UserProfile user={user} setUser={setUser} handleLogOut={handleLogOut} token={token} />
            </div>
    );
}

export default App;
