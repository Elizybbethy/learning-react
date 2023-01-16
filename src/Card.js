import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState, useEffect} from 'react';




export default function Card(props) {
//     const [users, account]= useState({});
// const usersSet = () => {
    // const name = {
    //     firstname: "try",
    //     lastname: 'trial'
    // }
    // setUsers(prevState => name);
    // const [users, accounts, comments] = useState({username:"lizy", accountname:"twits", comment:'like'})
    const [users, hi, comments] = useState({username:"lizy", hello:"twits", comment:'like'})
// }
//   function cardchanges() {
//     users.username
//   }
    
    return (
     <div>
        
        <Grid container spancing={2} justifyContent="center" style={{backgroundColor:"#ccb1f2"}}>
            <Grid item sm={8} md={6}>
                <Paper variant='outlined' elevation={4} sx={{p: 2, margin:5, maxWidth: 400, backgroundColor: "#f2deb1"}}>
        
        {/* <Card variant="outlined"> */}
        <Grid container>
            <Grid item sm={8} md={6}>
                <Typography gutterBottom variant='tittle' color='primary'>{props.Home}</Typography>
                <Grid item>
                <Typography gutterButton variant='subtittle2' color="primary">{props.accountName}</Typography>
            </Grid>
            </Grid>
        <Grid container alignItems="center">
        <AccountCircleIcon fontSize="large"></AccountCircleIcon>
        <Typography color="text.secondary" variant='body2'>{props.username}</Typography>
        </Grid>
        </Grid>
        <Grid container>
            <Grid item sm={8} md={6}>
                <Typography color="text.secondary" variant='body3'>{props.content}</Typography>
            </Grid>
            <Grid container>
            <Grid item sm={8} md={6}>
                {/* <Typography color="text.secondary" variant="body4">{props.comment}</Typography> */}
                {/* <input type="text" value={name.firstName} onChange={e => setName({firstName: e.target.value})}/> */}
                {/* <Typography value={users.username} onChange={e => setName({username: e.target.value})}> </Typography> */}
                {/* <Typography value={hi.hello} onChange={e => setName({hello: e.target.value})}> </Typography> */}
                <Typography gutterButton variant='subtittle2' color="primary">{users.username}</Typography>
            </Grid>
            </Grid>
        </Grid>
        {/* </Card> */}
            </Paper>
            </Grid>
        </Grid>
           
        </div>
    )
}


