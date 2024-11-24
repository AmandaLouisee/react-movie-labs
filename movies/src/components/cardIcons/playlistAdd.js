import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {

    const context = useContext(MoviesContext);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };  

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist} >
      <PlaylistAdd sx={{color: "pink"}} fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;