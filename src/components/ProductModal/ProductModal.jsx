import { AnimatedCross } from "../AnimatedCross/AnimatedCross";
import css from "./ProductModal.module.scss";

export const ProductModal = ({ setModal }) => {
  return (
    <div className={css.modal}>
      <AnimatedCross setModal={setModal} />
      <h2 className={css.modal__title}>услуга</h2>
      <h3 className={ css.modal__for}>для кого</h3>
    </div>
  );
};
