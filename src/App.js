import React, {useState} from 'react';
import UserProfile from "./components/userProfile/UserProfile";
import HomeView from "./components/Home.View";
import useToken from "./helpers/useToken";

function App() {
    const {token, setToken} = useToken();
    const [user, setUser] = useState();
    console.log(user)
    if (!token) {
        return <HomeView setToken={setToken} setUser={setUser}/>
    }
    return (
            <div>
                <h1>Application</h1>
                <UserProfile user={user} />
            </div>
    );
}

export default App;
