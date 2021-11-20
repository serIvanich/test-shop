import React from 'react'
import {Button, Paper, TextField} from "@mui/material";

export const CustomerForm: React.FC = () => {

    return (
        <Paper elevation={21} sx={{height: 400}}>
            <TextField id="name" label="name" variant="standard" />
            <TextField id="surname" label="surname" variant="standard" />
            <TextField id="address" label="address" variant="standard" />
            <TextField id="phone" label="phone" variant="standard" />
            <Button>order</Button>
        </Paper>
    )
}

