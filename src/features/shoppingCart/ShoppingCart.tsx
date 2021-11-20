import {Container, Grid} from '@mui/material'
import React from 'react'
import {ProductCard} from "./ProductCard";
import {ProductType} from "../products/products-reduser";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";

export const ShoppingCart: React.FC = () => {

    const productsInShoppingCart = useSelector<AppRootStateType, Array<ProductType>>(
        state => state.shoppingCart.products)
    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <Grid item>
                        {productsInShoppingCart.length === 0 ? 'there is not products in your shopping cart'
                            : productsInShoppingCart.map((item, ind) =>{
                                return <ProductCard key={ind} prod={item}/>
                            })}
                    </Grid>
                </Grid>
                <Grid item xs={4}> for order


                </Grid>


            </Grid>
        </Container>
    )
}
