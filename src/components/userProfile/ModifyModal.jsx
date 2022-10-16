import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Container, TextField} from "@mui/material";

const styles = {
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        marginTop: 5
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
}

export default function ModifyModal({handleSubmit, handleInputChange, formModifyValues}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
            <div>
                <Button variant="contained" onClick={handleOpen}>Modifier mes informations</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Modifier mes informations
                        </Typography>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <Container>
                                    <TextField
                                        required
                                        id="address-modify-input"
                                        label="Adresse"
                                        name="address"
                                        type="text"
                                        value={formModifyValues.address}
                                        onChange={handleInputChange}
                                    />
                            </Container>
                            <br/>
                            <Container>
                                    <TextField
                                        required
                                        id="email-modify-input"
                                        label="Email"
                                        name="email"
                                        type="text"
                                        value={formModifyValues.email}
                                        onChange={handleInputChange}
                                    />
                            </Container>
                            <div style={styles.buttonContainer}>
                                <Button variant="contained" type="submit">Modifier</Button>
                                <Button variant="contained" onClick={handleClose}>Annuler</Button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>

    );
}