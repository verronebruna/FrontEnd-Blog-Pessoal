import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@material-ui/core';
import {Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    return (
        <>
           <AppBar position="static" >
                <Toolbar variant="dense" className='Nav'>
                    <Box>
                        <Avatar alt="Logo: livro" src='https://cdn-icons.flaticon.com/png/512/4209/premium/4209433.png?token=exp=1645676453~hmac=9f4aac9288b68b17e552663aaaae651a' />
                    </Box>

                    <Box className="text-decorator-none" display="flex">
                        <Link to='/home'className='text-decorator-none' >
                            <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Posts
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor' >
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;