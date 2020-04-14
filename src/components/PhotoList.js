import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

const PhotoList = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=4DrseCCxDUWVGOzhBboQJYnwJeLhCZciE1UUc38Q"
      )
      .then((response) => {
        console.log(response.data);
        setPhoto(response.data);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }, []);
  return (
    <div>
      <PhotoCard photo={photo} />
    </div>
  );
};

export default PhotoList;
