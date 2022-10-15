import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
            <Router>
                <Routes>
                    <Route path="/home" component={ HomeView } />
                    <Route path="/profilePage" component={ UserProfile } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
