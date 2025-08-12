import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

export default function ProductsList({products, selectedCategory, cart, setCart}) {
    function addToCart(id) {
        setCart(prev => [...prev, { id, qty: 1 }]);
    }

    function deleteFromCart(id) {
        setCart(prev => prev.filter(value => value.id !== id));
    }

    const ids = new Set(cart.map(i => i.id));

    return (
        <>
        {products.map((product, index) => {
            if (selectedCategory.includes(product.category)) {
            return (
                        <li className={styles.cart} key={index}>  
                            <Link to={`/shop/product/${product.id}`} state={{ product }}>
                                <div className={styles.cartImage}><img src={product.image} title={product.title} /></div>
                                <div className={styles.cartTitle}><h4>{product.title}</h4></div>
                                <div className={styles.cartPrice}>{product.price}</div>
                            </Link>
                            <div>
                                <div className={styles.buttons}>
                                    {(!ids.has(product.id)) && (
                                    <button onClick={()=>addToCart(product.id)} className={styles.addToCart}>Add to Cart</button>)}
                                    {(ids.has(product.id)) && (<button onClick={()=>deleteFromCart(product.id)} className={styles.addToCart}>Удалить из корзины</button>)}
                                </div>
                            </div>  
                        </li>
            )}
        })}
    </>
    )
}