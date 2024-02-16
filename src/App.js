import React from 'react';
import './App.css';
import HomeScreen from "./HomeScreen";
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Nav />
     <HomeScreen />
     <Banner />
    
    </div>
  );
}

export default App;
