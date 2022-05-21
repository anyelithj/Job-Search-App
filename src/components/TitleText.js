import { Typography } from "@material-ui/core";
import React from "react";

export const TitleText = ({text}) => {
  return (
      <Typography style={{marginBottom:"5%", fontWeight:"bold"}} variant="h4" gutterBottom component="div">
        {text}
      </Typography>
  );
};
