import React from "react";
import { Input } from "antd";

const { Search } = Input;

const AthletesForm = ({ handleSubmit }) => {
  return (
    <Search
      placeholder="Search for a crossfit athlete"
      onSearch={value => handleSubmit(value)}
      enterButton
    />
  );
};

export default AthletesForm;
