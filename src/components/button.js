import React from "react";
import { styled } from "../stitches.config";

const ButtonStyle = styled("button", {
  backgroundColor: "$primary",
  borderRadius: "10px",
  border: "0px",
  color: "$primal_white",
  fontFamily: "$primary",
  fontWeight: "bold",
  height: "40px",
  outline: "0px",
  padding: "10px 20px 10px 20px",
  width: "auto",
  minWidth: "100px",
  transition: "background-color 0.05s ease-in-out",
  ":hover": {
    backgroundColor: "$primary_color_dark",
  },
  ":active": {
    backgroundColor: "$primal_darkgreen",
  },
});

export const Button = ({ label }) => {
  return <ButtonStyle>{label}</ButtonStyle>;
};
