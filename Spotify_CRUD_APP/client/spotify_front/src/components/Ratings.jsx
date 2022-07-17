import React from "react";
import {FaStar} from 'react-icons/fa';
import { useState } from "react";
const Ratings = ({name,listOfRatings,setlistofRatings}) => {
    const [ratings, setRatings] = useState({});
    const handleClick = (e,ratingValue) => {
        const {name,value} = e.target;
        setRatings(ratingValue);
        setlistofRatings([...listOfRatings,{[name]:value}]);
    }   
  return (
    <>
      {[...Array(5)].map((star,idx) => {
        const ratingValue = idx + 1;
        return (
          <label style={{ cursor: "pointer" }}>
            <input type="radio" name={name} style={{ display: "none" }}  value={ratingValue} 
            onClick={(e) => {
                handleClick(e,ratingValue);

            }
            }
            />
            <FaStar style={{ color: ratingValue<= ratings ? "#ffc107" : "#e4e5e9" }} size={20} />
          </label>
        );
      })}
    </>
  );
};

export default Ratings;
