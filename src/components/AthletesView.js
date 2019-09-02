import React, { Suspense, useState, lazy } from "react";
import Loader from "react-loader-spinner";

import AthletesForm from "./AthletesForm";

// Suspense for code splitting
const AthleteList = lazy(() => import("./AthleteList")); // D3

export const AthletesView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerm(e.target.elements.searchTerm.value);
  };

  return (
    <div className="container">
      <h1>Crossfit Comparator {"🏋️‍♂️"}</h1>
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
          <AthleteList searchTerm={searchTerm} />
        </Suspense>
      ) : (
        <h3>Go ahead... add an athlete's name! {"😃"}</h3>
      )}
    </div>
  );
};
