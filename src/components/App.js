
import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Dark Mode state
  const [toggleButton, setToggleButton] = React.useState(false);

  // Toggle function
  function handleToggle() {
    setToggleButton((prevToggle) => !prevToggle);
  }

  // Use state to determine class
  const appClass = toggleButton ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>
          {toggleButton ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;