import "./App.css";
import Page1 from "./components/page/page1";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Cards from "./components/cards/cards";

function App() {
  const categoryInits = [
    { id: "1", title: "homme", description: "Vetement homme", image: "1001" },
    { id: "2", title: "femme", description: "Vetement femme", image: "1002" },
  ];

  const categoryElements = categoryInits.map((category) => (
    <div className="col-12 col-lg-3 " key={category.id}>
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
      <div className="row">{categoryElements}</div>
    </>
  );
}

export default App;
