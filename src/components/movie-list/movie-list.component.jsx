import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const MovieList = (props) => {
    return (
        <div className='movie-list' style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {props.movies.map(movie => (
                    <React.Fragment key={movie.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Movie Poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="button"
                                        variant="h6"
                                        onClick={() => props.hideList(movie)}
                                        sx={{ 
                                            color: 'primary.main', 
                                            textAlign: 'left',
                                            cursor: 'pointer', 
                                            background: 'none', 
                                            border: 'none', 
                                            padding: 0 
                                        }}
                                    >
                                        {movie.title}
                                    </Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            Released:  
                                        </Typography>
                                        {' ' + movie.release_date}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );    
}