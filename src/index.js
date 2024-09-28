import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      {" "}
      <h1> Fast React Meal Companey</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numberofpizza = pizzas.length;
  return (
    
    <main className="menu">
      <h2>Our Menu</h2>
   {  numberofpizza>0 ? (
    <>
          <p>Lorem fojafnafnenfepinfasknofcsddssdfsdfdsfdsfsdssdsdvsdsdsdsdsdsdsd</p>

    <ul className="pizzas">
        {
          pizzas.map(pizzas=>
            <Pizza pizzaObj={pizzas}/>
          )
        }
      </ul>
      </>): <p>We are working on the menu Please come back later :)</p>  
    }
    </main>
     );

 
}
function Pizza(props) {
 
  return (
    
    <li className= {`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
<div>
<h3>{props.pizzaObj.name}</h3>
<p>{props.pizzaObj.ingredients}</p>
<span>{props.pizzaObj.soldOut ? <p>SOLD OUT</p> :props.pizzaObj.price}</span>
</div>
    </li>
  );
}

 
function Footer() {
  const hour = new Date().getHours();
  const open = 11;
  const close = 22;
  const isOPen = hour >= open && hour <= close;
  console.log(isOPen);

  return (
    <footer className="footer">
     <div className="order">
     { isOPen ? (<Order close ={close}/>):<p>We are Welocome between {open}:00 and {close}:00 </p>}
     <button className="btn">Order</button>
     </div>
    </footer>
  );
}
function Order (props){
  return <div><p>We are open until {props.close}:00 </p></div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {" "}
    <App />
  </StrictMode>
);
