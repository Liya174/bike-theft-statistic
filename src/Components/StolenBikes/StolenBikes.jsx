import React from "react";
import s from "./StolenBikes.module.css";

const StolenBikes = ({ thefts }) => {
  console.log(thefts);
  return (
    <div>
      Stolen bikes
      {thefts.map((theft) => {
        return <div key={theft._id}>{theft.description}</div>;
      })}
    </div>
  );
};

export default StolenBikes;
