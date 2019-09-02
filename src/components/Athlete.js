import React from "react";

const Athlete = ({ item }) => (
  <div className="athlete">
    <div className="athlete__right">
      <div className="athlete__right__title">{item.name}</div>
      <div className="athlete__right__subtitle">
        affiliate: {item.affiliate}
      </div>
      <div className="athlete__right__details">id: {item.id}</div>
      <div className="athlete__right__details">
        competition: {item.competition}
      </div>
      <div className="athlete__right__details">year: {item.year}</div>
    </div>
  </div>
);

export default Athlete;
