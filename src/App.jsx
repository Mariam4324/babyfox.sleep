import "./App.css";
import data from "./assets/data";
import { Card } from "./components/Card/Card";
import { ProductModal } from "./components/ProductModal/ProductModal";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Container } from "./layout/Container/Container";

// prop type in card has 3 values: pink, green and yellow

function App() {
  console.log(data);

  const [modal, setModal] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <div className="card__wrapper">
          {/* <Card setModal={setModal} type={"yellow"} photoPath={childPhoto4} term={"месяц"} title={"Сопровождение"} price={"7000₽"} />
          <Card setModal={setModal} type={"pink"} photoPath={childPhoto1} term={"бессрочно"} title={"С нуля до самозасыпания"} price={"9500₽"} />
          <Card setModal={setModal} type={"green"} photoPath={childPhoto2} term={"разовая"} title={"Консультация самозасыпанию"} price={"3500₽"} />
          <Card setModal={setModal} type={"yellow"} photoPath={childPhoto3} term={"разовая"} title={"Консультация по режиму"} price={"2500₽"} /> */}
          {data.map((product) => (
            <Card setModal={setModal} type={product.type} photoPath={product.icon} term={product.term} title={product.title} price={product.price} />
          ))}
        </div>
      </Container>

      {modal ? <ProductModal setModal={setModal} /> : ""}
    </>
  );
}

export default App;
