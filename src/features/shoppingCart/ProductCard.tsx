import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import React from 'react'
import {actionShoppingCart, ShoppingCartStateType} from "./shopping-cart-reduser";
import {useActions} from "../../utils/redux-utils";
import ownProductImage from '../../assecs/image/own-product-image.png'

type ProductCardType = {
    prod: ShoppingCartStateType
}

export const ProductCard: React.FC<ProductCardType> = ({prod}) => {
    const {changeCount, deleteProductAtCart} = useActions(actionShoppingCart)

    const incrementProduct = () => {
        changeCount({id: prod.id, count: (prod.count+1)})
    }
    const decrementProduct = () => {
        if (prod.count - 1 === 0) {
            deleteProductAtCart({id: prod.id})
        }else {
            changeCount({id: prod.id, count: (prod.count - 1)})
        }
    }

    return (
        <Card sx={{
            display: "flex",
            flexDirection: 'row',
            height: '100%',
            width: '55vw',
            marginBottom: 5
        }}>

            <CardMedia
                component="img"

                image={ownProductImage}
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
 <Typography variant="body2" color="text.secondary">
                    {`1 х ${prod.price}`}
                </Typography>
                <Typography variant="subtitle1" component="div">
                    price: {prod.price * prod.count}
                </Typography>
            </CardContent>
            <CardActions>

                <Button size='small' onClick={incrementProduct}>+</Button>
                {prod.count}
                <Button size='small' onClick={decrementProduct}>-</Button>

            </CardActions>

        </Card>

    )
}