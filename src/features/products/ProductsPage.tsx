import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {actionProducts, ProductType} from "./products-reduser";
import {Product} from "./product/Product";
import Preloader from "../../components/preloader/Preloader";
import {useActions} from "../../utils/redux-utils";
import {getDatabase, onValue, ref} from "firebase/database";
import {Container, Grid} from "@mui/material";

export const ProductsPage: React.FC = () => {
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.products)
    const {getProducts} = useActions(actionProducts)

    useEffect(() => {
        if (!products.length) {
            const db = getDatabase();
            const starCountRef = ref(db, 'products');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                // const dataInState = data.map((i: ProductType) => ({[i.id]: i}))

                getProducts(data)

            })
        }
    }, [])


    if (products.length === 0) {
        return <Preloader/>
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent={'center'}>
                {products.map((i: ProductType) => <Grid item><Product key={i.id + i.name} prod={i}/></Grid>)}
            </Grid>

        </Container>
    )
}
