import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginScreen from "./LoginScreen";

function App() {
  return (
    <div className="app">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/LoginScreen" element={<LoginScreen />} /> */}
        </Routes>
      </Router>
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
