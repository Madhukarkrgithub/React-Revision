import React, { useState } from "react";
import "../App.css";
import CoffeeCard from "../component/CoffeeCard";

const Coffee = () => {

  const[coffee, SetCoffee] = useState([]);

  const fetchData = async() =>{
    try{
      const res = await fetch("http://localhost:8080/coffee");
      const data = await res.json();
      SetCoffee(data);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="container">
      {/* Create Button `Get Coffee` here */}
      <button className="btn" onClick={fetchData} >Get Coffee</button>

      <div className="coffee_container">
        {/* Populate coffee data inside CoffeeCard.jsx */}
        {coffee.map((item) =>(
          <CoffeeCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
