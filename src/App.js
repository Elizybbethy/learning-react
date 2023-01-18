import "./styles.css";
import * as React from "react";
import Card from "./Card.js";
import { useState, useEffect } from 'react';


// const users = ({title: 'try',  content: 'learn'});
export default function App() {
  // const [userDetails, setUserDetails] = React.useState({ username: "elizybbethy", account: "Twitter", headline:"Welcome", comment: 'like it here!', like:"like" })
  // const [like, setLike] = React.useState(0);
  const [userDetails, setUserDetails] = useState([
    {username: 'lizy', age: '18+', userstate: 'valid'},
    {username: 'beth', age: '17', userstate: 'invalid'},
  ]);
  return (
    <div>
      
      <Card userDetails={userDetails} />
      {/* <Button onClick={handleClick}>click</Button> */}
      
    </div>
  );
}
