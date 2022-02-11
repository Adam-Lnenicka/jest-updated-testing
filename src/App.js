import "./App.css";
import React, { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import BasicForm from "./components/Form/Form";
import { PizzaList } from "./components/PizzaList/PizzaList";
import Card from "./components/Card/Card";
import Banner from "./Banner";
import User from "./components/User/User";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div id="app" className={`${theme}-theme App`}>
      <Banner />
      <button id="toggle-theme" onClick={handleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <div className="flex">
        {PizzaList.map((list) => (
          <Card
            key={list.id}
            name={list.name}
            desc={list.desc}
            price={list.price}
            image={list.image}
          />
        ))}
      </div>
      <BasicForm />

      <ErrorBoundary>
        <User />
      </ErrorBoundary>
    </div>
  );
}

export default App;
