import { useEffect } from "react"

export default function CategoryFilter({products, category, selectedCategory, setSelectedCategory}) {
    // console.log('products', products)
    // console.log('category', category)
    function changeList(name) {
        if (!selectedCategory.includes(name)) {
            setSelectedCategory(prev=>([...prev, name]))
        }
        else (
            setSelectedCategory(selectedCategory.filter(value=> 
                value!==name
            ))
        )
    }

    useEffect(()=> {
        console.log('selectedCategory', selectedCategory)
    },[selectedCategory])

    return (
        <>
            <h2>Categories</h2>
            {category.map((value, index) => {
                return  <div key={index}> <input type='checkbox' onChange={()=>changeList(value)} checked={selectedCategory.includes(value)}/> {value} </div>
            })}
        </>
    )
}