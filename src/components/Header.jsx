import { Link } from "react-router-dom";
import styles from '../styles.module.css';

export default function Header() {
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
                    <Link to="Shop">Shop</Link>
                  </li>
                </ul>
              </nav>
              <input type="text" className={styles.search} />
              <div className={styles.cart}>
                <Link to="Cart"><i className="fa-solid fa-cart-shopping fa-xl"></i></Link>
              </div>
            </div>
          </header>
        </>
    )
}