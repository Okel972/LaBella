import { Promo } from '../../components/Promo';
import { Carousel } from '../../components/Carousel';
import { Location } from '../../components/Location';
import { FidelityCard } from '../../components/FildelityCard';
import './Home.css';
import { ContactForm } from '../../components/ContactForm';
import { MenuList } from '../../components/MenuList';
import { useGetAllProducts } from '../api/getAllProducts';

export const Home = () => {
  const products = useGetAllProducts();

  return (
    <div>
      <Carousel />
      <Promo />
      <div className="section-card">
        <MenuList title="Nos Pizzas" products={products} />
        <FidelityCard />
        <Location />
        <ContactForm />
      </div>
    </div>
  );
};
