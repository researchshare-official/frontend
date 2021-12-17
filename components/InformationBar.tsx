import { NextPage } from "next";
import { Box, Typography } from "@mui/material/";
import { default as article } from "../jsonFiles/article.json";
// import {default as Authors, default as Dates, default as Tags, default as OtherArticles, default as ArticleReviewed} from '../jsonFiles/article.json';

const InformationBar: NextPage = () => {
  return (
    <Box>
      <Box
        sx={{ marginTop: "0.375rem", display: "flex", flexDirection: "row" }}
      >
        <Box
          sx={{
            flexDirection: "column",
            marginRight: "2.5rem",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              width: "25rem",
              height: "1.5625rem",
              backgroundColor: "secondary.main",
              display: "flex",
            }}
          ></Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "bold",
                marginBottom: "2.25rem",
              }}
            >
              Information
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "black", marginBottom: "0.4375rem" }}
            >
              Authors:
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1.875rem", marginBottom: "1.5625rem" }}>
            {article.Authors.map((name) => (
              <Typography
                variant="body2"
                sx={{ color: "secondary.main", textDecoration: "underline" }}
                key={name}
              >
                {name}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "black", marginBottom: "0.4375rem" }}
            >
              Dates:
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1.875rem", marginBottom: "1.5625rem" }}>
            {article.Dates.map((name) => (
              <Typography variant="body2" sx={{ color: "black" }} key={name}>
                {name}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "black", marginBottom: "0.4375rem" }}
            >
              Tags:
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1.875rem", marginBottom: "1.5625rem" }}>
            {article.Tags.map((name) => (
              <Typography variant="body2" sx={{ color: "black" }} key={name}>
                {name}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "black", marginBottom: "0.4375rem" }}
            >
              Other articles:
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1.875rem", marginBottom: "1.5625rem" }}>
            {article.OtherArticles.map((name) => (
              <Typography
                variant="body2"
                sx={{ color: "secondary.main", textDecoration: "underline" }}
                key={name}
              >
                {name}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "black", marginBottom: "0.4375rem" }}
            >
              Reviewed by:
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1.875rem", marginBottom: "1.5625rem" }}>
            {article.ArticleReviewed.map((name) => (
              <Typography
                variant="body2"
                sx={{ color: "secondary.main", textDecoration: "underline" }}
                key={name}
              >
                {name}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InformationBar;
