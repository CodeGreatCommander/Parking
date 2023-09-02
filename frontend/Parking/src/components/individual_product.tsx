import { useParams } from "react-router-dom";

export default function Individual_Product(){
    const { parameter } = useParams();
    return(
        <>
        {parameter}
        </>
    )
}