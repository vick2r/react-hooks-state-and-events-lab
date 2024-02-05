import React, {useState} from "react";


function Item({ name, category }) {
const [cartStatus, setCartStatus] =useState(false)

  const handleClick =() => setCartStatus(()=> !cartStatus)
  
  const classNm= cartStatus===true ? "in-cart" : ""
  const buttonText= cartStatus===true ? "Remove from cart" : "Add to cart"
  const buttonClass = cartStatus===true ? "remove" : "add"

  return (
    <li className={classNm}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
