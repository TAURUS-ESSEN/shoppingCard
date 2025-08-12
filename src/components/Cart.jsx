import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
export default function Card() {
    const {cart, setCart } = useOutletContext();
    console.log(cart);
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (cart.length > 0) {
             const ids = new Set(cart.map(i => i.id));
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => {
            const tempArray = response.filter(p => ids.has(p.id))
            setProducts(tempArray);
            })
        }
    },[])

    useEffect(()=>{
        console.log('products', products)
    }, [products])
 
 return (<>
    {cart.length >0  &&  (
    <ul>
    {products.map(product=> {
        return <li><img src={product.image} alt={product.title} width='100px' />{product.title} {product.price}</li>
    })}
    </ul>
    )}
    </>)
}