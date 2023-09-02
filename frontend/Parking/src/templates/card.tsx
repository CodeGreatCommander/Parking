import { ReactNode } from 'react';
export default function Card({children}:{children:ReactNode}){
    return(
        <div className="w-4/5 self-center border rounded-lg shadow-sm px-10 py-5 m-4">
            {children}
        </div>
    )
}