import { useParams } from "react-router-dom";

export default function Product({products}) {
    const { id } = useParams();
    console.log('products',products)
    return (
        <>

        test {id}
        </>
    )
}