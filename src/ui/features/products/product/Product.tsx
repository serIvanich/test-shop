import React from "react";
import {ProductType} from "../../../../bll/products-reducer/products-reducer";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useActions} from "../../../../utils/redux-utils";
import {actionShoppingCart, ShoppingCartStateType} from "../../../../bll/shopping-cart-reducer/shopping-cart-reduser";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../utils/types";
import ownProductImage from '../../../../assecs/image/own-product-image.png'

export const Product: React.FC<ProductPropsType> = ({prod}) => {

    const productsInShoppingCart = useSelector<AppRootStateType, Array<ShoppingCartStateType>>(
        state => state.shoppingCart.products)
    const {addProductToCart, changeCount} = useActions(actionShoppingCart)


    const addProduct = () => {
        if ((productsInShoppingCart.length > 0) && productsInShoppingCart.some(i => {
            if (i.id === prod.id) {
                changeCount({id: i.id, count: (i.count + 1)})
            }
            return i.id === prod.id
        })) {
            return
        } else {

            addProductToCart([{...prod, count: 1}])
        }
    }
    return (
        <Card sx={{width: 300, marginBottom: 5}}>
            <CardMedia
                component="img"
                height="140"
                image={ownProductImage}
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

    )
}

type ProductPropsType = {
    prod: ProductType
}
