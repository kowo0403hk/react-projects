import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  const mappedTour = tours.map((tour) => (
    <Tour key={tour.id} removeTour={removeTour} {...tour} />
  ));
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>{mappedTour}</div>
    </section>
  );
};

export default Tours;
