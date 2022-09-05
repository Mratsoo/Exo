import "./App.css";
import Page1 from "./components/page/page1";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Cards from "./components/cards/cards";
import Contact from "./components/contactForm/contactForm";
import DarkModes from "./components/darkmode/darkmode";
import React, { useState, useEffect } from 'react';

function App() {
  const [Mode, setMode] = useState(true);
    const switchMode = () => {
      setMode(!Mode)
    };

    useEffect(() => {
      document.body.className = Mode ? 'bg-light' : 'bg-dark';
    }, [Mode]);

  const categoryInits = [
    { id: "1", title: "homme", description: "Vetement homme", image: "./assets/img/homme.jfif" },
    { id: "2", title: "femme", description: "Vetement femme", image: "/assets/img/femme.jpg" },
    { id: "3", title: "Enfant", description: "Vetement enfant", image: "/assets/img/enfant.jpg" },
    { id: "4", title: "Baby", description: "Vetement baby", image: "/assets/img/baby.webp" },
  ];

  const categoryElements = categoryInits.map((category) => (
    <div className="col-12 col-lg-3" key={category.id}>
      <Cards
        Mode={Mode}
        title={category.title}
        description={category.description}
        image={category.image}
      />
    </div>
  ));




  return (
    <>
      <div className={`App ${!Mode ? 'text-light' : 'text-dark'}`}><Page1 /></div>
      <div className="row container">{categoryElements}</div>
      <Contact Mode ={Mode}/>
      <div className={`App ${Mode ? 'bg-light' : 'bg-dark'}`}>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={switchMode} role="switch" id="flexSwitchCheckDefault"/>
  <label class={`form-check-label ${!Mode ? 'text-light': 'text-dark'}`} for="flexSwitchCheckDefault">{Mode ? "light" : "dark"}</label>
</div>
    <button onClick={switchMode}>Change theme</button>
        </div>
    </>
  );
}

export default App;