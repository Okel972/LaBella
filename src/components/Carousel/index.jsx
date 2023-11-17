import './Carousel.css';

export const Carousel = () => {
    return (
        <div>
            <section class="slider">

                <article class="firstSlideContainer">

                    <img src="img/Slide_1.jpg" alt="#" class="imageForFirstSlide"/>

                    <div class="TextFirstSlideContainer">
                        <span class="textForFirstSlide1">la veggie</span>
                        <span class="textForFirstSlide2">Une nouvelle offre végétarienne. </span>
                    </div>

                </article>

                <img src="img/Slide_2.jpg" alt="#"/>
                <img src="img/Slide_3.jpg" alt="#"/>
                <img src="img/Slide_4.jpg" alt="#"/>

            </section>

            <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
            <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
            <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

            <script type="text/javascript" src="script/script.js"></script>
        </div>
    );
}