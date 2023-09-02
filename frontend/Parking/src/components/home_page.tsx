import { useEffect, useState } from "react";
import Product_card from "../templates/product_card";
import Product_Row from "../templates/product_row";
import Loader from "../templates/loader";

export default function Home_Page() {
    const [slots, setSlots] = useState([]);
    useEffect(() => {
        const get_products = async () => {
            const domainName = window.location.origin;
            const response = await fetch(`${domainName}/api/slots/name`, {
                method: 'GET',
            });
            const data = await response.json();
            setSlots(data);
        }
        get_products();
    }, [])
    return (
        <>{
            slots.length === 0 ? 
            <Loader/>:
            <Product_Row>
                {
                    slots.map((slot: any) => <Product_card name={slot.name} img={"data:image/png;base64," + slot.img} id={slot._id.toString()} />)
                }</Product_Row>
        }</>
    )
} 