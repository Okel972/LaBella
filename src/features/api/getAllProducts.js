import { useState, useEffect } from 'react';

const menuList = [
  {
    picture: 'img/Olivia1.png',
    title: 'Poulet',
    description: 'Base tomate, fromage, olives vertes, olives noires…',
    price: '6.00€',
  },

  {
    picture: 'img/Olivia1.png',
    title: 'Olivia',
    description: 'Base tomate, fromage, olives vertes, olives noires…',
    price: '6.00€',
  },
  {
    picture: 'img/Olivia1.png',
    title: 'Olivia',
    description: 'Base tomate, fromage, olives vertes, olives noires…',
    price: '6.00€',
  },
  {
    picture: 'img/Olivia1.png',
    title: 'Olivia',
    description: 'Base tomate, fromage, olives vertes, olives noires…',
    price: '6.00€',
  },
  {
    picture: 'img/Olivia1.png',
    title: 'Olivia',
    description: 'Base tomate, fromage, olives vertes, olives noires…',
    price: '6.00€',
  },
  {
    picture: 'img/Olivia1.png',
    title: 'Olivia',
    description: 'Base tomate, fromage, olives vertes, olives noires…',
    price: '6.00€',
  },
];

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        setProducts(menuList);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Return the products array
  return products;
};
