import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import React from 'react'
import {ShoppingCartStateType} from "./shopping-cart-reduser";

type ProductCardType = {
    prod: ShoppingCartStateType
}

export const ProductCard: React.FC<ProductCardType> = ({prod}) => {
    return (
        <Card sx={{
            display: "flex",
            flexDirection: 'row',
            height: 150,
            width: 600,
            marginBottom: 5
        }}>

            <CardMedia
                component="img"

                image={prod.photo}
                alt="product image"
                sx={{
                    width: '170px',
                    marginRight: '90px'
                }}
            />
            <CardContent sx={{
                width: '150px',
                display: "grid",
            }}>
                <Typography variant="h5" component="div">
                    {prod.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {prod.info}
                </Typography>
                <Typography variant="subtitle1" component="div">
                    price: {prod.price * prod.count}
                </Typography>
            </CardContent>
            <CardActions>

                <Button size='small' onClick={() => {
                }}>+</Button>
                {prod.count}
                <Button size='small' onClick={() => {
                }}>-</Button>

            </CardActions>

        </Card>

    )
}