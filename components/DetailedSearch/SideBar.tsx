import { Box, Divider } from "@mui/material";
import WhatAreYouLookingFor from "./WhatAreYouLookingFor";
import Date from "./Date";
import IncludeFilter from "./IncludeFilter";
import CategoriesFilter from "./CategoriesFilter";

const SideBar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: 1 / 5 }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: 1 / 1 }}>
        <WhatAreYouLookingFor></WhatAreYouLookingFor>
        <Date></Date>
        <IncludeFilter></IncludeFilter>
        <CategoriesFilter></CategoriesFilter>
      </Box>
      <Box
        sx={{
          display: "flex-end",
          flexDirection: "row-reverse",
          marginLeft: "auto",
        }}
      >
        <Divider
          variant="fullWidth"
          orientation="vertical"
          sx={{ marginTop: "2rem", alignSelf: "right" }}
        />
      </Box>
    </Box>
  );
};

export default SideBar;
