import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './requests';
import Banner from 'components/Banner';

function App() {
  return (
    <div className="App">
      {/* navbar  */}
      <Navbar />
      
      {/* banner        */}
      <Banner />
      {/* movie lists  */}
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchURL = {requests.fetchTrending}/>
    </div>
  );
}

export default App;
