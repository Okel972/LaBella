import './Promo.css';

export const Promo = () => {
  return (
    <section className="promotions">
      <article className="promo_L">
        <span className="promo-left-title">Promotion</span>
        <span className="promo-left-day">Les Mardis</span>
        <span className="promo-left-comment">
          Ne manquez pas notre promotion
          <br />
          pizza à moitié prix !
        </span>
        <span className="promo-left-price">7.00€</span>
        <button className="promo-left-order">commander</button>
        <div className="promo-left-image"></div>
      </article>

      <article className="promo_R">
        <span className="promo-right-title">Promotion</span>
        <span className="promo-right-day">Les Vendredis</span>
        <span className="promo-right-comment1">3 pizzas Maxi achetées</span>
        <span className="promo-right-price">La 3ème à 3.00€*</span>
        <span className="promo-right-comment2">*la moins chère des trois</span>
        <button className="promo-right-order">commander</button>
        <div className="promo-right-image"></div>
      </article>
    </section>
  );
};
