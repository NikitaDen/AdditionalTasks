import React from 'react';
import './styles/styles.scss';
import MessageContainer from "./components/Message/MessageContainer";
import AdvantagesContainer from "./components/Advantages/AdvantagesContainer";
import Names from "./components/Names/Names";
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/Tasks/TodoList";

function App() {
    return (
        <div className="App">

            <Navbar/>

            <Route path={'/monday'} render={() =>
                <>
                    <MessageContainer/>
                    <AdvantagesContainer/>
                    <Names/>
                </>
            }/>

            <Route path={'/tuesday'} render={() =>
                <>
                    <TodoList/>
                </>
            }/>

        </div>
    );
}

export default App;
