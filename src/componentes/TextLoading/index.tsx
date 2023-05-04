import { useState } from "react";


type TextLoadingType ="textloading"
interface TextLoadingProps {
type?:TextLoadingType

}


export const TextLoading = ({type="textloading"}:TextLoadingProps) =>{
    const [load, setLoad] = useState(0);
    return(<>
    <div className={`textloading ${type}`}></div>
    </>)
}