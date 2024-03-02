import React, { useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(12); // Set a default limit

    const handleData = async () => {
        try {
            const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Product page</h1>
            <button onClick={handleData}>Get Product Data</button>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                {products.length > 0 ? (
                    products.map((item) => (
                        <div key={item.id} style={{  margin: "10px" }}>
                            <img src={item.images} alt="loading..." height={300} width={300} />
                            <h2>Title : {item.title}</h2>
                            <h2>Price : ${item.price}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No products available ....To get data click on button</p>
                )}
            </div>
        </div>
    );
};

export default Product;
