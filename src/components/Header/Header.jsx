import { Container } from "../../layout/Container/Container";
import { Link } from "../Link/Link";
import { Logo } from "../Logo/Logo";
import css from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header__wrapper}>
          <Logo />

          <ul className={css["header-nav"]}>
            <Link linkText={"Услуги"} />
            <Link linkText={"Отзывы"} />
            <Link linkText={"О компании"} />
            <Link linkText={"Помощь"} />
          </ul>
        </div>
      </Container>
    </header>
  );
};
