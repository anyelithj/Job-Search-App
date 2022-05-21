import { Card } from "@mui/material";
import React from "react";
import Controls from "./Controls";
import Search from "./Search";

const Categories = () => {
  return (
    <div>
      <Controls/>
      <Search/>
      <Card/>
    </div>
  );
};

export default Categories;
