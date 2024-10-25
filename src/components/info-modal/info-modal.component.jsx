import React from 'react';
import { Modal, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const InfoModal = ({ movie, open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card sx={style}>
                <CardMedia
                    sx={{ height: 500 }}
                    image={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                    title="Movie Poster"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movie.overview}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Release Date: {movie.release_date}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Rating: {movie.vote_average}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Vote Count: {movie.vote_count}
                </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Modal>
    );
};