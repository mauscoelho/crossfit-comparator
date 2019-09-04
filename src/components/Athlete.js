import React from "react";

const Athlete = ({ item, onFollow }) => (
  <div className="show">
    <div className="show__right">
      <div className="show__right__title">{item.name}</div>
      <div className="show__right__subtitle">affiliate: {item.affiliate}</div>
      <div className="show__right__details">id: {item.id}</div>
      <div className="show__right__details">
        competition: {item.competition}
      </div>
      <div className="show__right__details">year: {item.year}</div>
      <button
        onClick={() => onFollow(item.id)}
        className="show__right__subtitle"
      >
        Follow
      </button>
    </div>
  </div>
);

export default Athlete;
