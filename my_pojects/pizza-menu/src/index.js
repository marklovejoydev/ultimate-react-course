import React from "react";
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
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          {/* <React.Fragment key="djhasdhjlg"> if you need to pass in a key to the fragment */}
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from out stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, index) => (
              <Pizza
                key={index}
                name={pizza.name}
                ingredients={pizza.ingredients}
                photo={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later. </p>
      )}
    </main>
  );
}

function Pizza(props) {
  let pizzaClass = "pizza";
  if (props.soldOut) {
    pizzaClass += " sold-out";
  }
  return (
    <li className={pizzaClass}>
      <img src={props.photo} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "Sold Out" : props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed we open back up at 12.");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString().slice(0, -3)}{" "}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        "Sorry, we are closed. We open back up at 12."
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're Open until {closeHour}:00. Come vist us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
