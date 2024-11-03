import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {


  return (
    <IconButton aria-label="add to playlist" >
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;