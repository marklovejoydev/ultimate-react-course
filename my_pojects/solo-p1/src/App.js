import { useState } from "react";

const data = [
  {
    name: "apples",
    packed: false,
  },
  {
    name: "chicken",
    packed: false,
  },
  {
    name: "chips",
    packed: false,
  },
  {
    name: "pizza",
    packed: false,
  },
  {
    name: "milk",
    packed: false,
  },
];

export default function App() {
  const [items, setItems] = useState(data);

  function handleToggleItem(name) {
    setItems((items) =>
      items.map((item) =>
        item.name === name ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(name) {
    setItems((item) => items.filter((item) => item.name !== name));
  }

  return (
    <div className="App">
      <Header />
      <ShoppingCard
        items={items}
        handleToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

function Header() {
  return (
    <>
      <h1>Shopping List</h1>
    </>
  );
}

function ShoppingCard({ items, handleToggleItem, onDeleteItem }) {
  return (
    <div className="card">
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onToggleItem={handleToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ name, item, onToggleItem, onDeleteItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.name)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.name)}>❌</button>
    </li>
  );
}
