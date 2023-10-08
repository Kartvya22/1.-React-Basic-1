import "./Item.css";
import React, { useState } from "react";

function Item(props) {
  //   let itemName = props.name;

  // useState is one type of hook in react
  // if we want to update UI with new value we can use usestate
  // syntax -  [je variable upadate karvano hoy ae, upadate function] = useState(initial value of variable);
  const [itemName, setItemName] = useState(props.name);

  function clickHandler() {
    // // below line is only update the variable value but not upadate on UI
    // itemName = "popcorn";
    // console.log(itemName);

    setItemName("popcorn");

    console.log("i am clicked.");
  }

  return (
    <div className="itemdiv">
      <div className="item ">{itemName}</div>

      {/* onclick is one types of event handler in react js  */}
      {/* all the event handler name start with on  */}
      {/* event handleer is   props in react */}
      {/* clickHandler is function that is call on click */}
      {/* event handler ma function na name pacchal () nai lakhvana karan k jo lakhiae to ae direct statement ma j execute thai jase by default */}

      <button onClick={clickHandler}>Add to Card!</button>

      {props.children}
    </div>
  );
}

export default Item;
