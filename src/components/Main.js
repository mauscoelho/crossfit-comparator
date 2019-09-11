import React, { Suspense, useState, lazy } from "react";
import { Empty } from "antd";
import { Loader } from "./Loader";

import AthletesForm from "./AthletesForm";
import FollowingAthlete from "./FollowingAthlete";

const AthleteList = lazy(() => import("./AthleteList")); // D3

export const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [following, setfollowing] = useState([]);
  const handleSubmit = value => {
    setSearchTerm(value);
  };

  function onFollow(id) {
    const newId = Number(id);
    const athletes = following.concat([newId]);
    setfollowing(athletes);
  }

  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flex: 1,
        flexDirection: "column"
      }}
    >
      <AthletesForm handleSubmit={handleSubmit} />
      {searchTerm && (
        <Suspense fallback={<Loader />}>
          <AthleteList searchTerm={searchTerm} onFollow={onFollow} />
        </Suspense>
      )}
      {following.length ? (
        <Suspense fallback={<Loader />}>
          {following.map(id => (
            <FollowingAthlete key={id} id={id} />
          ))}
        </Suspense>
      ) : (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Empty description="No athletes" />
        </div>
      )}
    </div>
  );
};
