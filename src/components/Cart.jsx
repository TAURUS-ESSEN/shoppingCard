import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
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
 
 return (
    <div> 
        {cart.length === 0 && (
           <h4> Shopping Cart is empty</h4>
        )}

        <div className={styles.cartList}>
            
            <ul>
                {products.map(product=> {
                    return <Link to={`/shop/product/${product.id}`} state={{ product }}>
                        <li><img src={product.image} alt={product.title} width='100px' />{product.title} {product.price}$</li></Link>
                })}
            </ul>
            
        </div>
        <div>
            dfds
        </div> 
    </div>)
}