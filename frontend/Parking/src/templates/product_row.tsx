import { ReactNode } from 'react';
export default function Product_Row({children}:{children:ReactNode}){
    return(
        <div className='w-full p-3 flex flex-row overflow-auto' style={{height:"20rem"}}>
            {children}
        </div>
    )
}