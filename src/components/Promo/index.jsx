import './Promo.css';

export const Promo = () => {
    return (
        <section class="promotions">

            <article class="promo_L">
                <span class="promo-left-title">Promotion</span>
                <span class="promo-left-day">Les Mardis</span>
                <span class="promo-left-comment">Ne manquez pas notre promotion<br/>pizza à moitié prix !</span>
                <span class="promo-left-price">7.00€</span>
                <a class="promo-left-order">commander</a>
                <div class="promo-left-image"></div>
            </article>

            <article class="promo_R">
                <span class="promo-right-title">Promotion</span>
                <span class="promo-right-day">Les Vendredis</span>
                <span class="promo-right-comment1">3 pizzas Maxi achetées</span>
                <span class="promo-right-price">La 3ème à 3.00€*</span>
                <span class="promo-right-comment2">*la moins chère des trois</span>
                <a class="promo-right-order">commander</a>
                <div class="promo-right-image"></div>
            </article>

        </section>
    );
}