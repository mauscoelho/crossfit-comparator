import React from "react";
import useFetch from "fetch-suspense";

function FollowingAthlete({ id }) {
  console.log(id);
  const athlete = useFetch(
    `https://cf-comp-proxy.herokuapp.com/https://games.crossfit.com/competitions/api/v1/athlete/${id}`
  );
  console.log(athlete);
  return (
    <div className="athlete">
      <div className="athlete__left">
        <img src={athlete.profilePicS3key} alt="poster" />
      </div>
      <div className="athlete__right">
        <div className="athlete__right__title">{athlete.competitorName}</div>
        {athlete.stats.open.map(open => (
          <div>
            <div className="athlete__right__subtitle">{open.year}</div>
            <div className="athlete__score">
              {open.worldWide.scores.map(score => (
                <div className="athlete__score__item">
                  <div className="athlete__right__details">
                    wod: {score.ordinal}
                  </div>
                  <div className="athlete__right__details">
                    rank: {score.rank}
                  </div>
                  <div className="athlete__right__details">
                    score: {score.scoreDisplay}
                  </div>
                  <div className="athlete__right__details">
                    scaled: {score.scaled === "0" ? "no" : "yes"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowingAthlete;
