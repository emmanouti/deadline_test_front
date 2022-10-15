import React from 'react';
import UserProfile from "./components/userProfile/UserProfile";
import HomeView from "./components/Home.View";
import useToken from "./helpers/useToken";

function App() {
    const {token, setToken} = useToken();
    if (!token) {
        return <HomeView setToken={setToken}/>
    }
    return (
            <div>
                <h1>Application</h1>
                <UserProfile />
            </div>
    );
}

export default App;
