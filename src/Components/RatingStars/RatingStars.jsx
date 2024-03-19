import React from "react";
import "./RatingStars.css";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ rating }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FCD34D", // Couleur des étoiles pleines
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47", // Couleur au survol
    },
    "& .MuiRating-iconEmpty": {
      color: "#FCD34D",
      // Couleur des étoiles vides, ajustez selon besoin
    },
  });

  return (
    <div className="rating-stars">
      <StyledRating
        name="customized-color"
        getLabelText={(value) => `${value} Star${value !== 1 ? "s" : ""}`}
        precision={0.1}
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        readOnly
        defaultValue={rating}
        max={5}
      />
    </div>
  );
};

export default RatingStars;
