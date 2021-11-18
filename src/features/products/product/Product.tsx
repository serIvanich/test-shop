import React from "react";
import {ProductType} from "../products-reduser";
import {Card, Container, Grid, Paper} from "@mui/material";

export const Product: React.FC<ProductPropsType> = ({prod}) => {

    return (
        <Paper  elevation={13}>
            <Card sx={{ minWidth: 275, minHeight: 300 }}>
                <Grid item xs={6}>
                    {prod.photo}
                </Grid>
                <Grid item xs={6}>
                    {prod.name}
                </Grid>
                <Grid item xs={6}>
                    {prod.info}
                </Grid>
                <Grid item xs={6}>
                    {prod.price}
                </Grid>
            </Card>
        </Paper>
    )
}

type ProductPropsType = {
    prod: ProductType
}
