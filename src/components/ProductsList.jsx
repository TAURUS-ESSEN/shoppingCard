import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

export default function ProductsList({products, selectedCategory, cart, setCart}) {
    function addToCard(id) {
        setCart(prev => [...prev, { id, qty: 1 }]);
    }


    return (
        <>
        {products.map((product, index) => {
            if (selectedCategory.includes(product.category)) {
            return (
                        <li className={styles.card} key={index}>  
                            <Link to={`/shop/product/${product.id}`} state={{ product }}>
                                <div className={styles.cardImage}><img src={product.image} title={product.title} /></div>
                                <div className={styles.cardTitle}><h4>{product.title}</h4></div>
                                <div className={styles.cardPrice}>{product.price}</div>
                            </Link>
                            <div>
                                <div className={styles.buttons}>
                                    <button onClick={()=>addToCard(product.id)} className={styles.addToCard}>Add to Card</button>
                                </div>
                            </div>  
                        </li>
            )}
        })}
    </>
    )
}