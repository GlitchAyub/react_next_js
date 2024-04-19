import { notFound } from "next/navigation"

export default function ReviewDetailsId({params}:{
    params:{reviewsid:string,productid:string}
}){
    if(parseInt(params.reviewsid )< 100){
        notFound()
    }
    return <>
    <h1> Review {params.reviewsid} for Products {params.productid}</h1>
    </>
}
// [] dynamic segments