import React from "react";
import useFetch from "fetch-suspense";
import Athlete from "./Athlete";

function normalize({ result, year, competition }) {
  const athletesByYear = result.map(athlete => ({
    ...athlete,
    year,
    competition
  }));
  return athletesByYear;
}

function AthleteList({ searchTerm }) {
  const year = 2019;
  const competition = "open";
  const result = useFetch(
    `https://cors-anywhere.herokuapp.com/http://games.crossfit.com/competitions/api/v1/competitions/${competition}/${year}/athletes?term=${searchTerm}`
  );
  console.log(result);
  const athleteList = normalize({ result, year, competition });

  return (
    <div className="AthleteList-wrapper">
      {athleteList.map(item => (
        <Athlete key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AthleteList;
