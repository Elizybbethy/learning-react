import "./styles.css";
import * as React from "react";
import Card from "./Card.js";


// const users = ({title: 'try',  content: 'learn'});
export default function App() {
  const [userDetails, setUserDetails] = React.useState({ username: "lizy", accountname: "twits", comment: 'like' })
  return (
    <div>
      <Card userDetails={userDetails} />
    </div>
  );
}
