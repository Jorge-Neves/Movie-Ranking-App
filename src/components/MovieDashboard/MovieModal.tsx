import { FC } from 'react';
import { Box, Modal, Typography, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DetailedMovieDTO } from '../../models';

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
  const theme = useTheme();
  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '748px',
          height: '682px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '8px',
          padding: '24px 62px 17px 62px',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: '24px',
            height: '24px',
            right: 24,
            top: 24,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
          <Typography
            sx={{
              fontSize: '8px',
              color: theme.palette.custom.modalCloseButton,
            }}
          >
            Close
          </Typography>
        </IconButton>
        <Typography variant="h6" component="h2">
          {movieDetails!?.title}
        </Typography>
        <Typography>Year</Typography>
        <Typography sx={{ mt: '17px' }}>{movieDetails?.year}</Typography>
        <Typography>Genre</Typography>
        <Typography sx={{ mt: '17px' }}>{movieDetails?.genre}</Typography>
        <Typography>Description</Typography>
        <Typography sx={{ mt: '17px' }}>{movieDetails?.description}</Typography>
        <Box>
          <Typography>Director</Typography>
          <Typography sx={{ mt: '17px' }}>{movieDetails?.director}</Typography>
          <Typography>Actors</Typography>
          <Typography sx={{ mt: '17px' }}>{movieDetails?.actors}</Typography>
        </Box>
        <Typography>Runtime</Typography>
        <Typography sx={{ mt: '17px' }}>{movieDetails?.runtime}</Typography>
        <Typography>Rating</Typography>
        <Typography sx={{ mt: 2 }}>{movieDetails?.rating}</Typography>
        <Typography>Votes</Typography>
        <Typography sx={{ mt: 2 }}>{movieDetails?.votes}</Typography>
        <Typography>Revenue</Typography>
        <Typography sx={{ mt: 2 }}>${movieDetails?.revenue}</Typography>
        <Typography>Metascore</Typography>
        <Typography sx={{ mt: 2 }}>{movieDetails?.metascore}</Typography>
      </Box>
    </Modal>
  );
};

export default MovieModal;
