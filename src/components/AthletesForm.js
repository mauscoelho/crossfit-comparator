import React from "react";

const AthletesForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Search for crossfit athletes:</p>
      <input type="text" name="searchTerm" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AthletesForm;
