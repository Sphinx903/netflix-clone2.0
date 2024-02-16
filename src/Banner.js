import React from "react";
import "./Banner.css";

function Banner() {

  function truncate(string, n){
    return string?.lenght > n ? string.substr(0, n-1) + '...' : string;

  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://t3.ftcdn.net/jpg/03/56/37/38/240_F_356373830_Cg7aFeVcrxA5wP08m2pjYUfjuSItqNdt.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
        {truncate(
          `Test descriptionTest descriptionTest descriptionTest descriptionvTest descriptionTest descriptionTest description
          Test descriptionTest descriptionTest descriptionTest descriptionTest descriptionTest descriptionvvvvvTest description
        Test descriptionTest descriptionTest description`, 150
        )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
