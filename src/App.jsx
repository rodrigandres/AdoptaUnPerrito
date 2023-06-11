import "./App.css";
import Container from "react-bootstrap/Container";
import MyCard from "./components/MyCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bartolo from "./assets/img/01.Bartolo.jpg";
import Messi from "./assets/img/02.Messi.jpg";
import Gohan from "./assets/img/03.Gohan.jpg";
import Princesa from "./assets/img/04.Princesa.jpg";

const mycardcontain = [
  {
    src: Bartolo,
    borderColor: 'primary',
    title2: "Bartolo",
    text: "Lleno de energia y listo para jugar. Dale a Bartolo el hogar amoroso que se merece!",
    btn: "Labrador",
  },
  {
    src: Messi,
    borderColor: 'success',
    title2: "Messi",
    text: "Es juguetón, amigable y se lleva con niños y otros animales. Haz de Messi parte de tu familia hoy mismo!",
    btn: "Bobtail",
  },
  {
    src: Gohan,
    borderColor: 'danger',
    title2: "Gohan",
    text: "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!",
    btn: "Boerboel",
  },
  {
    src: Princesa,
    borderColor: 'info',
    title2: "Princesa",
    text: "Es una compañera leal y cariñosa que adora los mimos y los abrazos. Ayuda a Princesa a encontrar su final feliz!",
    btn: "Husky",
  },
];

function App() {
  const title = "Adopta un Perrito";

  return (
    <Container>
      <div className="App">
        <Header title={title} />
        <div className="card-container">
          {mycardcontain.map((p) => (
            <MyCard {...p} />
          ))}
        </div>
        <Footer />
      </div>
    </Container>
  );
}
export default App;
