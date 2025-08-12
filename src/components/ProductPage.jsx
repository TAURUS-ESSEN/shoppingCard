import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ProductPage() {
    const location = useLocation();
    const [productData, setProductData] = useState(location.state?.product || null);
    const { id } = useParams();
    useEffect(() => {
        if (!productData)     
            alert('x')
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then (response => response.json())
            .then (response => {
                setProductData(response)
            })
        
    },[id, productData])

    return (
        <>
            <div>{productData?.title}</div>
            <div><img src={productData?.image} /></div>
            <div>{productData?.description}</div>
            <div>{productData?.price}</div>
            <div>{productData?.rating.rate} von  {productData?.rating.count}</div>  
        </>
    )
}