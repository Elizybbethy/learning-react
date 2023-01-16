import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';




export default function Card({ userDetails }) {


    return (
        <div>

            <Grid container spancing={2} justifyContent="center" style={{ backgroundColor: "#ccb1f2" }}>
                <Grid item sm={8} md={6}>
                    <Paper variant='outlined' elevation={4} sx={{ p: 2, margin: 5, maxWidth: 400, backgroundColor: "#f2deb1" }}>

                        {/* <Card variant="outlined"> */}
                        <Grid container>
                            <Grid item sm={8} md={6}>
                                <Typography gutterBottom variant='tittle' color='primary'>{userDetails.Home}</Typography>
                                <Grid item>
                                    <Typography gutterButton variant='subtittle2' color="primary">{userDetails.accountname}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center">
                                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                                <Typography color="text.secondary" variant='body2'>{userDetails.username}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sm={8} md={6}>
                                <Typography color="text.secondary" variant='body3'>{userDetails.content}</Typography>
                            </Grid>
                            <Grid container>
                                <Grid item sm={8} md={6}>
                                    {/* <Typography color="text.secondary" variant="body4">{userDetails.comment}</Typography> */}
                                    {/* <input type="text" value={name.firstName} onChange={e => setName({firstName: e.target.value})}/> */}
                                    {/* <Typography value={users.username} onChange={e => setName({username: e.target.value})}> </Typography> */}
                                    {/* <Typography value={hi.hello} onChange={e => setName({hello: e.target.value})}> </Typography> */}
                                    <Typography gutterButton variant='subtittle2' color="primary">{userDetails.username}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <FavoriteBorderIcon></FavoriteBorderIcon>
                            </Grid>
                        </Grid>
                        {/* </Card> */}
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}


