import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "@mui/material";




export default function ButtonAppBar() {


    return (
        <Box sx={{ flexGrow: 1, height: 100}}>
            <AppBar position="static" sx={{height: '100%', backgroundColor: 'floralwhite'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: 'lightgrey'}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'lightgrey' }}>
                        My shop
                    </Typography>

                        <Link href={'/cart'} underline="hover" sx={{ color: 'lightgrey' }}>
                            shopping cart
                        </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}