import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [selectedCategory, setSelectedCategory] = useState("All")

  const matchingItems = items.filter( element => element.category === selectedCategory)
  
  console.log(matchingItems, "items that match the selected criteria")

  console.log(items, '69 wtfs per minute')

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e => {
          setSelectedCategory( selectedCategory = e.target.value)
        }}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
          selectedCategory === "All" ?
          
          items.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} /> 
          )) :
          
          matchingItems ?

          matchingItems.map((element) => (
            <Item key={element.id} name={element.name} category={element.category} /> 
          )) 
          :
          null
        }
      </ul>
    </div>
  )
}

export default ShoppingList;
