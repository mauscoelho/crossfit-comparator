import React from "react";
import useFetch from "fetch-suspense";
import { Card, Avatar } from "antd";

function FollowingAthlete({ id }) {
  console.log(id);
  const athlete = useFetch(
    `https://cf-comp-proxy.herokuapp.com/https://games.crossfit.com/competitions/api/v1/athlete/${id}`
  );
  console.log(athlete);
  return (
    <Card style={{ marginBottom: 4 }}>
      <Card.Meta
        avatar={<Avatar src={athlete.profilePicS3key} />}
        title={athlete.competitorName}
      />
      {athlete.stats.open.map(open => (
        <div>
          <div>{open.year}</div>
          <div>
            {open.worldWide.scores.map(score => (
              <div>
                <div>wod: {score.ordinal}</div>
                <div>rank: {score.rank}</div>
                <div>score: {score.scoreDisplay}</div>
                <div>scaled: {score.scaled === "0" ? "no" : "yes"}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
}

export default FollowingAthlete;
