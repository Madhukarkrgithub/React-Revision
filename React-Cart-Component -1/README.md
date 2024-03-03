# React-cart-component


### Description

- You have to build the following

![image](https://i.imgur.com/3VMxMq1.png)

- It should show the following values:-
  1.  Name:String
  2.  Price:Number
  3.  Quantity:Number
- For the data you can use the data in App.jsx.
- Each Product should have quanity as 1 by default.
- All Products will have 2 Buttons Increment(+) & Decrement(-)
- When clicked on the buttons the quantity of that respective product should increment/decrement.
- disable the decrement button if the quantity is < 0
- You can only decrement a product's value if it's greater than 0.

You are given two Components

### App.jsx

- manage the state of products data here
- initial data should be the data present in App.jsx

### Product.jsx

- This components should accept the following props
  - name
  - price
  - quantity
  - id
  - handleQty
- onclicking the increment / decrement button `handleQty` callback function should be called with id and payload as arguments
  - the payload is 1 for increment and -1 from decrement

