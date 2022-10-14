import React from 'react';
import Container from '@mui/material/Container';
import HomeView from "./components/Home.View";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <HomeView />
                </Container>
            </header>
        </div>
    );
}

export default App;
