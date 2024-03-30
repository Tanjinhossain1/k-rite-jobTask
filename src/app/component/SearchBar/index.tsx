import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";

const inputStyle = {
  padding: "8px 8px 8px 50px", // Adjust padding as needed
//   paddingLeft:"40px",
  width: "100%",
};

export default function SearchBar() {
  return (
    <Grid
      sx={{
        position: "relative",
        borderRadius: "15px",
        backgroundColor: "#f0f2f5", // Light gray background color
        "&:hover": {
          backgroundColor: "#e4e6eb", // Lighter gray on hover
        },
        marginLeft: 0,
        width: "100%",
      }}
    >
      <Grid
        sx={{
          padding: "8px",
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"#d600cb",
          borderTopLeftRadius:"15px",
          borderBottomLeftRadius:"15px"
        }}
      >
        <SearchIcon />
      </Grid>
      <InputBase
      size="small"
        placeholder="Search For.."
        style={inputStyle}
        inputProps={{ "aria-label": "search" }}
      />
    </Grid>
  );
}
