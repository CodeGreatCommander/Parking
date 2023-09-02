import { useNavigate } from "react-router-dom";
import Card from "./card"
interface Product_cardProps{
    name:string,
    img:string,
    id:string
}
export default function Product_card({name,img,id}:Product_cardProps){
    return(
        <div className="w-80 h-full" onClick={()=>{const navigate = useNavigate(); navigate("/product/"+id)       }}>
            <Card>
                <div className="flex flex-col justify-around">
                <h1 className="font-bold text-2xl">{name}</h1>
                <img src={img}/></div>
            </Card>
        </div>
    )
}