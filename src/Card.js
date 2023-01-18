import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import Button from '@mui/material';



export default function Card({userDetails}) {


    
    return (
        <div>
           
        
       {userDetails.map((user)=>{

        return    <p>{user.username}</p>;
       })} 
            <Grid container spancing={2} justifyContent="center" style={{ backgroundColor: "#ccb1f2" }}>
                <Grid item sm={8} md={6}>
                    <Paper variant='outlined' elevation={4} sx={{ p: 2, margin: 5, maxWidth: 400, backgroundColor: "#f2deb1" }}>

                        <Grid container>
                            <Grid item sm={8} md={6}>
                                <Typography gutterBottom variant='tittle' color='primary'>{userDetails.account}</Typography>
                                <Grid item>
                                    <Typography gutterButton variant='subtittle2' color="primary">{userDetails.headline}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center">
                                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                                <Typography color="text.secondary" variant='body2'>{userDetails.username}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sm={8} md={6}>
                                <Typography color="text.secondary" variant='body3'>{userDetails.comment}</Typography>
                            </Grid>
                            <Grid container alignItems="center">
                                <Grid item sm={8} md={6}>
                                <FavoriteBorderIcon>{userDetails.like}</FavoriteBorderIcon>
                                <Typography color="primary" variant="body4">{userDetails.like}</Typography>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        {/* <Grid container>
                            <Grid item>
                            <Button onClick={handleClick}></Button> 
                            </Grid>
                        </Grid> */}
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
    
}


