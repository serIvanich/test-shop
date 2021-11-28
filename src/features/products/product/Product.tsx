import React from "react";
import {ProductType} from "../products-reduser";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography} from "@mui/material";
import {useActions} from "../../../utils/redux-utils";
import {actionShoppingCart} from "../../shoppingCart/shopping-cart-reduser";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/types";

export const Product: React.FC<ProductPropsType> = ({prod}) => {
    const productsInShoppingCart = useSelector<AppRootStateType, Array<ProductType>>(
        state => state.shoppingCart.products)
    const {addProductToCart} = useActions(actionShoppingCart)
    const addProduct = () => {
        if (productsInShoppingCart.length === 0 || productsInShoppingCart.every(i => i.id !== prod.id)) {
            addProductToCart(prod)
        }
    }
    return (
        <Card sx={{width: 300, marginBottom: 5}}>
            <CardMedia
                component="img"
                height="140"
                image={prod.photo}
                alt="product image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {prod.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {prod.info}
                </Typography>
                <Typography variant="subtitle1" component="div">
                    price: {prod.price}
                </Typography>
            </CardContent>
            <CardActions>

                <Button size='medium' onClick={addProduct}>add to cart</Button>

            </CardActions>
        </Card>



        // <Paper  elevation={13}>
        //     <Card sx={{ minWidth: 275, minHeight: 300 }}>
        //         <Grid item xs={6}>
        //             {prod.photo}
        //         </Grid>
        //         <Grid item xs={6}>
        //             <Grid item xs={6}>
        //             {prod.name}
        //             </Grid>
        //             <Grid item xs={6}>
        //                 {prod.info}
        //             </Grid>
        //             <Grid item xs={6}>
        //                 {prod.price}
        //             </Grid>
        //         </Grid>
        //
        //     </Card>
        // </Paper>
    )
}

type ProductPropsType = {
    prod: ProductType
}
