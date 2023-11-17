import { Promo } from '../../components/Promo';
import { Carousel } from '../../components/Carousel';
import { Location } from '../../components/Location';
import { FidelityCard } from '../../components/FildelityCard';
export const Home = () => {
  return (
    <div>
      <Carousel />
      <Promo />
      <FidelityCard />
      <Location />
    </div>
  );
};
