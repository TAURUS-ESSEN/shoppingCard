import { useState, useEffect } from "react"
import styles from '../styles.module.css';
import CategoryFilter from './CategoryFilter';
import ProductsList from './ProductsList';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length === 0) {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => {
                setProducts(response)
                const tempArray = Array.from(new Set (response.map(value=> value.category)))
                setCategory(tempArray);
                setSelectedCategory(tempArray);
            })
        }
    },[])

    useEffect(()=> {
        // console.log('что внутри',products)
    }, [products])

    useEffect(()=> {
        console.log('ЧТО ТО ДОБАВИЛИ!')
    }, [cart])

    return (
        <div>
            <div className={styles.shopContainer}>
                <div className={styles.shopCategories}>
                    <CategoryFilter products={products} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </div>
                <div className={styles.productsList}>
                    <ProductsList products={products} selectedCategory={selectedCategory} cart={cart} setCart={setCart}/>
                </div>
            </div>
        </div>
    )
}