import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Reviews } from "./components/Reviews/Reviews";
import { Services } from "./components/Services/Services";

// prop type in card has 3 values: pink, green and yellow

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Reviews  />
    </>
  );
}

export default App;
