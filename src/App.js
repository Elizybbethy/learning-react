// import "./styles.css";
import * as React from "react";
import Cards from "./Cards.js";
import { useState, useEffect } from 'react';
// import { Button } from "@mui/material";
export default function App() {
  
  const [userDetails, setUserDetails] = React.useState([
    { username: "elizybbethy", account: "Twitter", headline:"Welcome!", comment: 'like it here!', like:"like" },
    { username: "elizy", account: "facebook", headline:"Welcome", comment: 'free world!', like:"like" }
  ]);
  // const [like, setLike] = React.useState(0);
  // const [userDetails, setUserDetails] = useState([
  //   {username: 'lizy', age: '18+', userstate: 'valid'},
  //   {username: 'beth', age: '17', userstate: 'invalid'},
  // ]);
  // const[Like, setLike] = useState(0);
  // useEffect(() => {

  // }, [])
  // function addLike(){
  //   setLike(Like + 1);
  // }
  return (
    <div>
{/* <h2>Likes:</h2>
        <Button onClick={addLike}>Add a Like</Button> */}
      <Cards userDetails={userDetails} />
      {/* <Button onClick={handleClick}>click</Button> */}

    </div>
  );
}