import React from 'react';
import {TextField, Grid, Button, Container, Typography} from "@mui/material";


const SubscribingFormView = ({formValues, handleSubmit, handleInputChange}) => {
    return (
        <Container sx={{padding:2}} >
            <Typography variant="h4">Nouveau sur le site ?</Typography>
            <br/>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                            required
                            id="pseudo-input"
                            label="Pseudo"
                            name="pseudo"
                            type="text"
                            value={formValues.pseudo}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="password-input"
                            label="Mot de passe"
                            name="password"
                            type="text"
                            value={formValues.password}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="surname-input"
                            label="Nom de famille"
                            name="surname"
                            type="text"
                            value={formValues.surname}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="name-input"
                            label="Prénom"
                            name="name"
                            type="text"
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="phone-input"
                            label="Numéro de téléphone"
                            name="phone"
                            type="text"
                            value={formValues.phone}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="address-input"
                            label="Adresse"
                            name="address"
                            type="text"
                            value={formValues.address}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="email-input"
                            label="Email"
                            name="email"
                            type="text"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Container>
                        <Button sx={{padding: 2, marginTop: 2, width: "100%", alignSelf: "center"}} type="submit">Valider</Button>
                    </Container>
                </Grid>
            </form>
        </Container>
    )
}

export default SubscribingFormView;