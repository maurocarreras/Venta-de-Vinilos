import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { products } from './products';

export const ItemDetailContainer =() =>{

    const [ item, setItem ] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const productoEncontrado = products.find(
                    (prod) => prod.id === id
                );
                setTimeout(() => {
                    res(productoEncontrado);
                }, 500);
            });
        };

        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    return <ItemDetail item={item} />;
}

export default ItemDetailContainer