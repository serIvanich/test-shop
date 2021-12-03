import React from "react";
import {ProductType} from "../products-reduser";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useActions} from "../../../utils/redux-utils";
import {actionShoppingCart, ShoppingCartStateType} from "../../shoppingCart/shopping-cart-reduser";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/types";

export const Product: React.FC<ProductPropsType> = ({prod}) => {

    const productsInShoppingCart = useSelector<AppRootStateType, Array<ShoppingCartStateType>>(
        state => state.shoppingCart.products)
    const {addProductToCart, changeCount} = useActions(actionShoppingCart)

    const addProduct = () => {
        if (productsInShoppingCart.length > 0 && productsInShoppingCart.some(i => {

            if (i.id === prod.id) {
                changeCount({id: i.id, count: (i.count+1)})
                return true
            }
        })) {
            return
        } else {

            addProductToCart({...prod, count: 1})
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
