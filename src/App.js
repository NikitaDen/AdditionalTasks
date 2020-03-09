import React from 'react';
import './styles/styles.scss';
import MessageContainer from "./components/Message/MessageContainer";
import AdvantagesContainer from "./components/Advantages/AdvantagesContainer";

function App() {
  return (
    <div className="App">
      <MessageContainer/>
      <AdvantagesContainer/>
    </div>
  );
}

export default App;
