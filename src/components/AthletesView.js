import React, { Suspense, useState, lazy } from "react";
import Loader from "react-loader-spinner";

import AthletesForm from "./AthletesForm";
import FollowingAthlete from "./FollowingAthlete";

// Suspense for code splitting
const AthleteList = lazy(() => import("./AthleteList")); // D3

export const AthletesView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [followingAthletes, setfollowingAthletes] = useState([]);
  const handleSubmit = value => {
    setSearchTerm(value);
  };

  function onFollow(id) {
    const newId = Number(id);
    const athletes = followingAthletes.concat([newId]);
    setfollowingAthletes(athletes);
  }

  return (
    <div className="container">
      <AthletesForm handleSubmit={handleSubmit} />
      {searchTerm ? (
        <Suspense
          fallback={
            <Loader
              type="Ball-Triangle"
              color="#00BFFF"
              height="90"
              width="60"
            />
          }
        >
          <AthleteList searchTerm={searchTerm} onFollow={onFollow} />
        </Suspense>
      ) : (
        <h3>Go ahead... add an athlete's name! {"😃"}</h3>
      )}

      <Suspense
        fallback={
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        }
      >
        {followingAthletes.map(id => (
          <FollowingAthlete key={id} id={id} />
        ))}
      </Suspense>
    </div>
  );
};
