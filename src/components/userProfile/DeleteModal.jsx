import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
};
export default function DeleteModal({onClick}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Supprimer mon compte</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Supprimer votre compte ?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Êtes-vous certain(e) ? Cette action est irréversible.
                    </Typography>
                    <div style={styles.buttonContainer}>
                        <Button variant="contained" onClick={onClick}>Oui</Button>
                        <Button variant="contained" onClick={handleClose}>Non</Button>
                    </div>
                </Box>
            </Modal>
        </div>

    );
}