import css from "./Card.module.scss";

export const Card = ({ setModal, photoPath, type, term, title, price }) => {
  return (
    <div onClick={() => setModal(true)} className={css.card}>
      <div className={`${css.card__overlay} ${css[`card__overlay_${type}`]}`}>
        <img className={css.card__icon} src={photoPath} alt="child" />
      </div>

      <div className={css.card__info}>
        <div className={ css.card__top}>
          <span className={`${css.card__term} ${css[`card__term_${type}`]}`}>{term}</span>
          <h2 className={css.card__title}>{title}</h2>
        </div>

        <div className={css.card__bottom}>
          <span className={`${css.card__price} ${css[`card__price_${type}`]}`}>{price}</span>

          <svg className={css.card__arrow} xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
            <path d="M0 5.5H17M17 5.5L13.5081 1M17 5.5L13.5081 10" stroke="black" />
          </svg>
        </div>
      </div>
    </div>
  );
};
