import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid, TextField} from "@mui/material";

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

export default function ModifyModal({handleSubmit, handleInputChange, formModifyValues}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
            <div>
                <Button onClick={handleOpen}>Modifier mes informations</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Modifier mes informations
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container>
                                <Grid item>
                                    <TextField
                                        required
                                        id="address-modify-input"
                                        label="Adresse"
                                        name="address"
                                        type="text"
                                        value={formModifyValues.address}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="email-modify-input"
                                        label="Email"
                                        name="email"
                                        type="text"
                                        value={formModifyValues.email}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit">Modifier</Button>
                        </form>
                        <Button onClick={handleClose}>Annuler</Button>
                    </Box>
                </Modal>
            </div>

    );
}