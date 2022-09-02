import "./App.css";
import Page1 from "./components/page/page1";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Cards from "./components/cards/cards";
import Contact from "./components/contactForm/contactForm";

function App() {
  const categoryInits = [
    { id: "1", title: "homme", description: "Vetement homme", image: "./assets/img/homme.jfif" },
    { id: "2", title: "femme", description: "Vetement femme", image: "/assets/img/femme.jpg" },
    { id: "3", title: "Enfant", description: "Vetement enfant", image: "/assets/img/enfant.jpg" },
    { id: "4", title: "Baby", description: "Vetement baby", image: "/assets/img/baby.webp" },
  ];

  const categoryElements = categoryInits.map((category) => (
    <div className="col-12 col-lg-3" key={category.id}>
      <Cards
        title={category.title}
        description={category.description}
        image={category.image}
      />
    </div>
  ));

  return (
    <>
      <Page1 />
      <div className="row container">{categoryElements}</div>
      <Contact/>
    </>
  );
}

export default App;
