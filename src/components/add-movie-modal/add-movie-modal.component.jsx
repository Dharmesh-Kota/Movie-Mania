import React, { Component } from "react";
import { Button, Modal, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddMovie from "../add-movie/add-movie.component.jsx";

const addMovieStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class AddMovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddModal: false
        }
        this.props = props;
    }

    handleAddModalOpen = () => {
        this.setState({ openAddModal: true });
    };
    handleAddModalClose = () => {
        this.setState({ openAddModal: false });
    };
    
    render() {
        return (
            <div>
            <Button
            onClick={this.handleAddModalOpen}
            sx={{
                position: "fixed",
                bottom: 16,
                right: 16,
                borderRadius: "50%",
                minWidth: "56px",
                minHeight: "56px",
                padding: 0,
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": {
                backgroundColor: "primary.dark",
                },
            }}
            >
            <AddIcon />
            </Button>
            <Modal
            open={this.state.openAddModal}
            onClose={this.handleAddModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={addMovieStyle}>
                <AddMovie updateMovies={this.props.updateMovies} />
            </Box>
            </Modal>
            </div>
        );
    }
}

export default AddMovieModal;