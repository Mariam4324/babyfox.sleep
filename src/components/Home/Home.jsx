import css from "./Home.module.scss";
import photo from "../../assets/home_pic.webp";
import { Container } from "../../layout/Container/Container";
import { Icons } from "../Icons/Icons";
import instIcon from "../../assets/inst.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsApp.svg";

export const Home = () => {
  return (
    <main className={css.home}>
      <Container>
        <div className={css.home__wrapper}>
          <img className={css.home__photo} src={photo} alt="Jacob Paulaner" />

          <div className={css.home__main}>
            <h1 className={css.home__title}>Take your podcast to the next level</h1>

            <div className={css.home__contacts}>
              <p className={css.home__subtitle}>Сontact on</p>
              <div className={css.home__icons}>
                <Icons iconPath={instIcon} />
                <Icons iconPath={telegramIcon} />
                <Icons iconPath={whatsappIcon} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
