import React from "react";
import { unstable_createResource as createResource } from "react-cache";

import { fetchAthletesBySearchTerm } from "../api/fetchAthletes";

import Athlete from "./Athlete";

const athletes = createResource(fetchAthletesBySearchTerm);

function AthleteList({ searchTerm }) {
  const athleteList = athletes.read(searchTerm);

  return (
    <div className="ShowList-wrapper">
      {athleteList.map(item => (
        <Athlete key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AthleteList;
