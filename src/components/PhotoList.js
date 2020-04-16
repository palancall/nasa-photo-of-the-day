import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import DateChanger from "./DateChanger";

import "react-datepicker/dist/react-datepicker.css";

const PhotoList = () => {
  const [photo, setPhoto] = useState([]);
  const [year, setYear] = useState(2015);
  const [month1, setMonth1] = useState(0);
  const [month2, setMonth2] = useState(4);
  const [day1, setDay1] = useState(1);
  const [day2, setDay2] = useState(1);
  console.log(year);
  console.log(day2);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=4DrseCCxDUWVGOzhBboQJYnwJeLhCZciE1UUc38Q&date=${year}-${month1}${month2}-${day1}${day2}`
      )
      .then((response) => {
        console.log(response.data);
        setPhoto(response.data);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }, [year, day2]);
  return (
    <div>
      <DateChanger
        year={year}
        month1={month1}
        month2={month2}
        day1={day1}
        day2={day2}
        setYear={setYear}
        setMonth1={setMonth1}
        setMont2={setMonth2}
        setDay1={setDay1}
        setDay2={setDay2}
      />
      <PhotoCard photo={photo} />
    </div>
  );
};

export default PhotoList;
