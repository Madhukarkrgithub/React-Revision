import React, { useEffect, useState } from 'react'

const Product = () => {

    const[products, setProducts] = useState([]);

    const handleData = async() =>{
        try{
            const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();
            setProducts(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
        handleData();
    },[]);
  return (
    <div>
      <h1>Product page</h1>
      <button onClick={handleData}>Get Product Data</button>
      <div>
        {products.map((item) => (
            <div>
                <img src={item.images} alt="loading..." height={300} width={300} />
                <h2>Title : {item.title}</h2>
                <h2>Price : ${item.price}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Product
