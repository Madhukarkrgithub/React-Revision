import React from "react";
import "../App.css";

const CoffeeCard = ({item}) => {

  const{image,description,title,ingredients,price,id} = item;

  return <div className="coffeeCard-container">
    <img src={image} alt="loading" height={350} width={350} />
    <div className="card">
      <h2>{title}</h2>
      <p>₹ {price}</p>
      <p>{description}</p>
      <p>Ingredient</p>
      <ul> 
        {ingredients.map((ingredient,index) =>(
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  </div>;
};

export default CoffeeCard;
