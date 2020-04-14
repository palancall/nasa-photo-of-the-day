import React from "react";
import cardStyle from "./cardStyle.css";

const PhotoCard = (props) => {
  const photo = props.photo;

  return (
    <div className="wrapper">
      <div className="img-div">
        <img className="stars-img" alt="stars" src={photo.url} />
      </div>
      <div className="sidebar">
        <h2>{photo.title}</h2>
        <p>{photo.date}</p>
        <p className="explanation">{photo.explanation}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
