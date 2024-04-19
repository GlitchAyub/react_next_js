export default function ProductsDetails({params}:{
    params:{productid:string}
}){
    return <>
    <h1> Details about Products {params.productid}</h1>
    </>
}
// [] dynamic segments