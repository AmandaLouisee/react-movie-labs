import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie, translation, credit, keyword }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  if(!movie || !translation || !credit || !keyword){
    <Typography variant="h6" component="p">
    Info is loading.. 
  </Typography>
  };

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>


      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Cast" sx={{...chip}} color="primary" />
        </li>
        {credit.cast.map((o) => (
          <li key={credit.id}>
            <Chip label={o.name} sx={{...chip}} />
          </li>
                  ))}
      </Paper>


      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Crew" sx={{...chip}} color="primary" />
        </li>
        {credit.crew.map((o) => (
          <li key={credit.id}>
            <Chip label={o.name} sx={{...chip}} />
          </li>
                  ))}
                  </Paper>


      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Translations" sx={{...chip}} color="primary" />
        </li>
        {translation.translations.map((language) => (
          <li key={translation.id}>
            <Chip label={language.english_name} sx={{...chip}} />
          </li>
                  ))}
      </Paper>

      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Keywords" sx={{...chip}} color="primary" />
        </li>
        {keyword.keywords.map((i) => (
          <li key={keyword.id}>
            <Chip label={i.name} sx={{...chip}} />
          </li>
                  ))}
      </Paper>


      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;