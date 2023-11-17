import { Promo } from '../../components/Promo';
import { Carousel } from '../../components/Carousel';
import { Location } from '../../components/Location';
import { FidelityCard } from '../../components/FildelityCard';
import './Home.css';
import { ContactForm } from '../../components/ContactForm';
import { MenuList } from '../../components/MenuList';

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Promo />
      <div className="section-card">
        <MenuList title="Nos Pizzas" />
        <FidelityCard />
        <Location />
        <ContactForm />
      </div>
    </div>
  );
};
