import { Container } from "../../layout/Container/Container";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";
import data from "../../assets/data.js";
import css from "./Services.module.scss";
import { Button } from "../Button/Button.jsx";

export const Services = () => {
  return (
    <>
      <div className={css.services}>
        <Container>
          <Title titleText={"Услуги"} />

          <div className={css.services__wrapper}>
            {data.map((product, index) => {
              const uniqueKey = `item-${index}-${new Date().getTime()}`;

              return <Card key={uniqueKey} how={product.how} forWho={product.for} type={product.type} photoPath={product.icon} term={product.term} title={product.title} price={product.price} />;
            })}
          </div>

          <div className={css.services__btn}>
            <Button btnBG={"pink"} buttonText={"перейти"} />
          </div>
          
        </Container>
      </div>
    </>
  );
};
