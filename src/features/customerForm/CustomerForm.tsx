import React from 'react'
import {Button, Paper, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const CustomerForm: React.FC = () => {
    let navigate = useNavigate()
const clickToReturnShopping = () => {
    navigate('/products')
}
    return (
        <>
            <Paper elevation={21} sx={{
                height: 400,
                display: 'grid',
                padding: 3
            }}>
                <TextField id="name" label="name" variant="standard"/>
                <TextField id="surname" label="surname" variant="standard"/>
                <TextField id="address" label="address" variant="standard"/>
                <TextField id="phone" label="phone" variant="standard"/>
                <Button>order</Button>
            </Paper>
            <Button sx={{margin: '50px auto'}} onClick={clickToReturnShopping}>return to shopping</Button>
        </>
    )
}

