import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { products } from './products';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

  const [ items, setItems ] = useState(products);

  const { categoryName } = useParams();

  useEffect(() => {
    const getProducts = () => {
        return new Promise((res, rej) => {
            const productosFiltrados = products.filter(
                (prod) => prod.category === categoryName
            );

            const prodListados = categoryName
                ? productosFiltrados
                : products;
            setTimeout(() => {
                res(prodListados);
            }, 500);
        });
    };
    getProducts()
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
}, [categoryName]);

  return (
    <>
      <>{props.greeting}</>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
