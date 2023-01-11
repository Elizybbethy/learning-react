import "./styles.css";
import * as React from "react";
// import Box from "@mui/material/Box";
// import Chip from "@mui/material/Chip";
// import Button from "@mui/material/Button";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import CommentIcon from "@mui/icons-material/Comment";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import ShareIcon from "@mui/icons-material/Share";
// import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
// import withStyles from "@mui/material"
// import { styled } from "@mui/material/styles";
import Card from "./Card.js";

const users = ({title: 'try',  content: 'learn'});
export default function App() {
  return (
    // <Box sx={{display: 'flex', flexWrap: "wrap-reverse", '& > :not(style)': {m:1, width:128, height:128,},}}>

    // <Grid
    //   container
    //   spacing={2}
    //   justifyContent="center"
    //   style={{ backgroundColor: "#e8f9fa" }}
    // >
    <div>
       <Card name="Lizybethy" activity="developing"/>
       <Card name="Lizybethy1" activity="developing222"/>
       <Card name="Lizybdsdethy" activity="developin1ewg"/>
       <Card name="Lizdsdybethy" activity="sd"/>
       <Card name="sa" activity="develodping"/>
    </div>
      

//       <Grid item sm={8} md={6}>
//         <Paper
//           variant="outlined"
//           elevation={4}
//           sx={{
//             p: 2,
//             margin: 5,
//             maxWidth: 400,
//             flexGrow: 1,
//             backgroundColor: "#d9dafc"
//           }}
//         >
//           {/* <Box sx={{ width: "100%", maxWidth: 400 }}>
//             <Box sx={{ my: 5, mx: 2 }}> */}
//           <Grid container>
//             <Grid item>
//               <Typography gutterBotton variant="tittle" color="primary">
//                 Twitter
//               </Typography>
//             </Grid>
//             <Grid container alignItems="center">
//               <AccountCircleIcon fontSize="large"></AccountCircleIcon>
//               <Typography gutterBottom variant="h7" component="div">
//                 lizyBbethy
//               </Typography>
//             </Grid>
//             <Grid container>
//               <Grid item sm={8} md={6}>
//                 <Typography color="text.secondary" variant="body2">
//                   happy new year 2023!
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid container spacing={2} mt = {1} mb= {1}>
//               <Grid item xs>
//                 <Divider variant="middle" />
//               </Grid>
//             </Grid>
//             <Grid container spacing={2}>
//               <Grid item>
//                 <Chip icon={<CommentIcon />} label="Comment" />
//               </Grid>
//               <Grid item>
//                 <Chip icon={<ThumbUpIcon />} color="primary" label="Like" />
//               </Grid>
//               <Grid item>
//                 <Chip icon={<ThumbDownIcon />} color="primary" label="Unlike" />
//               </Grid>
//               <Grid item>
//                 <Chip icon={<ShareIcon />} label="Share" />
//               </Grid>
//             </Grid>
//             <Grid container>
//               <Grid item>
//                 <Button> next </Button>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>
//     </Grid>
  );
}
