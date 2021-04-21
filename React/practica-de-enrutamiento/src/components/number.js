import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Number = (props) => {
  let { id, color, bgcolor } = useParams();
  
  return (
    <div>
      {isNaN(+id) ? (
        <h2 style={{ color: color, backgroundColor: bgcolor }}>
          The word is: {id}
        </h2>
      ) : (
        <h2 style={{ color: color, backgroundColor: bgcolor }}>
          {" "}
          The number is: {id}
        </h2>
      )}
    </div>
  );
};

export default Number;
