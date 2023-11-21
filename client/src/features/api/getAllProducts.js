import { useState, useEffect } from 'react';

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/products', { mode: 'cors' });
        const json = await response.json();
        console.log(json);
        setProducts(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Return the products array
  return products;
};
