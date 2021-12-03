import {Button, Container, Grid} from '@mui/material'
import React from 'react'
import {ProductCard} from "./ProductCard";
import {ProductType} from "../products/products-reduser";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {CustomerForm} from "../customerForm/CustomerForm";
import {ShoppingCartStateType} from "./shopping-cart-reduser";

export const ShoppingCart: React.FC = () => {

    const productsInShoppingCart = useSelector<AppRootStateType, Array<ShoppingCartStateType>>(
        state => state.shoppingCart.products)
    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <Grid item>
                        {productsInShoppingCart.length === 0 ? 'there is not products in your shopping cart'
                            : productsInShoppingCart.map((item, ind) => {
                                return <ProductCard key={ind} prod={item}/>
                            })}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <CustomerForm/>

                </Grid>


            </Grid>

        </Container>
    )
}
