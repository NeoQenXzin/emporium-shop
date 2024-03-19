## Pour les addflash (équivalent)

```
 npm install react-toastify
```


## Pour le rating (éoiles)
<!-- rating  -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
https://mui.com/material-ui/react-rating/
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material

```

``` jsx
import React from "react";
import "./RatingStars.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const RatingStars = ({ rating }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  return (
    <div className="rating-stars">
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography component="legend">10 stars</Typography>
        <Rating name="customized-10" defaultValue={2} max={10} />
      </Box>
    </div>
  );
};

export default RatingStars;
```

## code pour les etoiles : 
```
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
```
