import "./styles.css";
import * as React from "react";
import Card from "./Card.js";


// const users = ({title: 'try',  content: 'learn'});
export default function App() {
  const [userDetails, setUserDetails] = React.useState({ username: "lizy", accountname: "twits", comment: 'like' })

  // const [users, account]= useState({username: "ElizyBbethy", accountname: "Twitter", Home: "Home", content:"welcome to the free world!",});
  // function cardchanges() {
  //   users.username
  // }
  // const handleChange = (e) => {
  //   let updatedValue = {};
  //   updatedValue = {username:e.target.value}
  // }



  return (
    <div>
      <Card userDetails={userDetails} />
    </div>
  );
}
