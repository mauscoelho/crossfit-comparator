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

function AthleteList({ searchTerm, onFollow }) {
  const year = 2019;
  const competition = "open";
  const result = useFetch(
    `https://yacdn.org/proxy/http://games.crossfit.com/competitions/api/v1/competitions/${competition}/${year}/athletes?term=${searchTerm}`
  );
  const athletes = normalize({ result, year, competition });

  return (
    <div style={{ paddingTop: 10 }}>
      {athletes.map(item => (
        <Athlete key={item.id} item={item} onFollow={onFollow} />
      ))}
    </div>
  );
}

export default AthleteList;
