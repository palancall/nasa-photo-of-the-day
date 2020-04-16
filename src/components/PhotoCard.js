import React from "react";
import "./cardStyle.css";

const PhotoCard = (props) => {
  const photo = props.photo;
  if (!photo) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div>
        <div className="wrapper">
          <div className="img-div">
            <img className="stars-img" alt="stars" src={photo.hdurl} />
          </div>
          <div className="sidebar">
            <h2>{photo.title}</h2>
            <h4>Date: {photo.date}</h4>
            <p className="explanation">{photo.explanation}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default PhotoCard;
