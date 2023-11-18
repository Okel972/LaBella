import { MenuList } from '../../components/MenuList';
import { SearchBar } from '../../components/SearchBar';
import { MenuFilter } from '../../components/MenuFilter';
import { useGetAllProducts } from '../api/getAllProducts';
import { useEffect, useState } from 'react';

export const Carte = () => {
  const allProducts = useGetAllProducts();
  const [products, setProducts] = useState(allProducts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // filter products with search
    const filteredProducts = allProducts.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    setProducts(filteredProducts);
  }, [allProducts, search]);

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <MenuFilter />
      <MenuList title="Nos Articles" products={products} />
    </div>
  );
};
