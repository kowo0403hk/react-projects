import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  //have to set up the conditional this way because hooks cannot be ran in conditional statements
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((prev) => checkNumber(prev + 1));
  };
  const prevPerson = () => {
    setIndex((prev) => checkNumber(prev - 1));
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);

    if (randomNum === index) {
      randomNum++;
    }
    //put randomNum inside checkNumber() to avoid exceeding the array number
    setIndex(checkNumber(randomNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
