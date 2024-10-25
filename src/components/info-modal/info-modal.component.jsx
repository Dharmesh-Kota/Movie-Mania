import React from 'react';
import { Modal, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';

const getModalWidth = () => {
    if (window.innerWidth < 768) {
        return '90vw'; 
    }
    return 400; 
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: getModalWidth(), 
    maxWidth: '90vw', 
    maxHeight: '80vh', 
    overflowY: 'auto', 
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    boxSizing: 'border-box', 
};

export const InfoModal = ({ movie, open, handleClose }) => {
    const windowWidth = window.innerWidth;
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
                    image={`https://image.tmdb.org/t/p/${windowWidth < 768 ? 'w200' : 'w400'}/${movie.poster_path}`}
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