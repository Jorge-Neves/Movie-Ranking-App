import { FC } from "react";
import { Box, Modal } from "@mui/material";
import { DetailedMovieDTO } from "../../../models";
import MovieSpecs from "./MovieSpecs";
import ModalHeader from "./ModalHeader";

interface MovieModalProps {
  movieDetails: DetailedMovieDTO | undefined;
  isModalOpen: boolean;
  handleClose: () => void;
}

const MovieModal: FC<MovieModalProps> = ({
  movieDetails,
  isModalOpen,
  handleClose,
}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "748px",
          minHeight: "682px",
          hieght: "auto",
          bgcolor: "background.paper",
          boxShadow: "0px 20px 40px #01243366",
          padding: "24px 32px 17px 62px",
        }}
      >
        <ModalHeader title={movieDetails!.title} handleClose={handleClose} />
        <MovieSpecs label={"Year"} value={movieDetails?.year} />
        <MovieSpecs label={"Genre"} value={movieDetails?.genre} />
        <MovieSpecs label={"Description"} value={movieDetails?.description} />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ marginRight: "48px" }}>
            <MovieSpecs
              label={"Director"}
              value={movieDetails?.director}
              isMovieCredits
            />
          </Box>
          <Box>
            <MovieSpecs
              label={"Actors"}
              value={movieDetails?.actors}
              isMovieCredits
            />
          </Box>
        </Box>
        <MovieSpecs label={"Runtime"} value={movieDetails?.runtime} />
        <MovieSpecs label={"Rating"} value={movieDetails?.rating} />
        <MovieSpecs label={"Votes"} value={movieDetails?.votes} />
        <MovieSpecs label={"Revenue"} value={`$${movieDetails?.revenue}`} />
        <MovieSpecs label={"Metascore"} value={movieDetails?.metascore} />
      </Box>
    </Modal>
  );
};

export default MovieModal;
