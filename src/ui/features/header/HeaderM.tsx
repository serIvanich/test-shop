import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/types";
import {ShoppingCartStateType} from "../../../bll/shopping-cart-reducer/shopping-cart-reduser";


export default function ButtonAppBar() {

    const productsInShoppingCart = useSelector<AppRootStateType, Array<ShoppingCartStateType>>(
        state => state.shoppingCart.products)
    let textPrice
    let navigate = useNavigate();

    const goToShopping = () => {
        navigate('/cart')
    }

    const takePriceShoppingCart = (arr: ShoppingCartStateType []) => {
        return arr.reduce((acc: number, i: ShoppingCartStateType) => {
            return acc += (i.count * i.price)
        }, 0)
    }

    if (productsInShoppingCart.length > 0) {
        textPrice = `price: ${takePriceShoppingCart(productsInShoppingCart)}`
    }


    return (
        <Box sx={{flexGrow: 1, height: 100}}>
            <AppBar position="static" sx={{height: '100%', backgroundColor: 'floralwhite'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2, color: 'lightgrey'}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, color: 'lightgrey'}}>
                        My shop
                    </Typography>
                    <Box sx={{
                        position: 'relative',
                        height: '100%'
                    }}>

                        <Button onClick={goToShopping} sx={{
                            color: 'lightgrey',
                            paddingTop: '25px'
                        }}>
                            shopping cart
                        </Button>
                        <Typography variant='h6' sx={{
                            color: 'lightgrey',
                            position: 'absolute',
                            top: '50px',
                            left: '15px'
                        }}>{textPrice}</Typography>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}