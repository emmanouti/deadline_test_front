import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserProfile from "./components/userProfile/UserProfile";
import HomeView from "./components/Home.View";

function App() {
    const [token, setToken] = useState();
    if (!token) {
        return <HomeView setToken={setToken}/>

    }
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" component={ HomeView } />
                    <Route path="/profile" component={ UserProfile } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
