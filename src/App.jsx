import React from 'react';
import './styles/styles.scss';
import MessageContainer from "./components/Message/MessageContainer";
import AdvantagesContainer from "./components/Advantages/AdvantagesContainer";
import Names from "./components/Names/Names";

function App() {
    return (
        <div className="App">
            <MessageContainer/>
            <AdvantagesContainer/>
            <Names/>
        </div>
    );
}

export default App;
