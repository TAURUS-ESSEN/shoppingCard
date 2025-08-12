import { Link } from "react-router-dom";
import styles from '../styles.module.css';

export default function Header({ cart = [] }) {
  const count = cart.length;

    return (
        <>
          <header className={styles.header}>
            <div className={styles.logo}>Shop Name</div>
            <div className={styles.flex}>
              <nav>
                <ul className={styles.flex}>
                  <li className={styles.link}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={styles.link}>
                    <Link to="/shop">Shop</Link>
                  </li>
                </ul>
              </nav>
              <input type="text" className={styles.search} />
              <div className={styles.cart}>
                <Link to="/cart"><i className="fa-solid fa-cart-shopping fa-xl"></i>
                {count > 0 && <span className={styles.badge}>{count}</span>}
                </Link>
              </div>
            </div>
          </header>
        </>
    )
}