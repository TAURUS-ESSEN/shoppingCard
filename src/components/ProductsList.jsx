import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

export default function ProductsList({products, selectedCategory, cart, setCart}) {
    function addToCard(id) {
        setCart(prev => [...prev, id]);
    }


    return (
        <>
        {products.map((products, index) => {
            if (selectedCategory.includes(products.category)) {
            return (
                        <li className={styles.card} key={index}>  <Link to={`/shop/product/${products.id}`} state={{ products }}>
                            <div className={styles.cardImage}><img src={products.image} title={products.title} /></div>
                            <div className={styles.cardTitle}><h4>{products.title}</h4></div>
                            <div className={styles.cardPrice}>{products.price}</div>
                            <div>
                                <div className={styles.buttons}>
                                    <button onClick={(e)=>changeButton(e)} className={styles.counter}>-</button>
                                    1
                                    <button onClick={(e)=>changeButton(e)} className={styles.counter}>+</button>
                                    <button onClick={()=>addToCard(products.id)} className={styles.addToCard}>Add to Card</button>
                                </div>
                            </div>  </Link>
                        </li>
            )}
        })}
    </>
    )
}