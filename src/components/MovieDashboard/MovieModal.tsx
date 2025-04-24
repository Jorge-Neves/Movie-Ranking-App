import { FC } from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DetailedMovieDTO } from '../../models';

interface MovieModalProps {
  movieDetails: DetailedMovieDTO;
  isModalOpen: boolean | undefined;
  handleClose: () => void;
}

const MovieModal: FC<MovieModalProps> = ({
  movieDetails,
  isModalOpen,
  handleClose,
}) => (
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
        p: 4,
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography id="modal-modal-title" variant="h6" component="h2">
        {movieDetails.title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {movieDetails.description}
      </Typography>
    </Box>
  </Modal>
);

export default MovieModal;
