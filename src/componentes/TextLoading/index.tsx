import { useEffect, useState } from "react";


type TextLoadingType = "textloading"
interface TextLoadingProps {
    type?: TextLoadingType

}


export const TextLoading = ({ type = "textloading" }: TextLoadingProps) => {

    const [load, setLoad] = useState(0);
    const loadSumar1 = () => {
        setLoad((load) => Math.min((load+1),100))
    }
    const functionLoad0_100 = async () => {
        //para ejecutar el codigo N veces se usan los ciclos

        // for
        for (let i = 0; i < 100; i++) {
            //esto ejecutara de 0 a 99 de acuerdo a un contador
            loadSumar1()
            await new Promise(resolve => setTimeout(resolve, 250)); //funcion para que el codigo se pause el numero de segundos,para que ejecute se debe utilizar si o si async 
        }
        //while
        // while (load < 100) {
        //     // esto se ejecutara siempre que la condicion se cumpla
        //     functionLoad0_100()
        // }

    }
    useEffect(()=>{
        functionLoad0_100()
    }, [])
    // load-opacity
    // 0-1
    // 10-.9
    // 20-.8
    // 30-.7
    // 40-.6
    // 41-.59
    // 45-.55
    // 50-.5
    // 60-.4
    // 70-.3
    // 75-.25
    // 76-.24
    // 77-.23
    // 80-.2
    // 82-.18
    // 90-.1
    // 100-0
 
    

    return (<>
        <div className={`textloading ${type}`} style={{
            opacity : 1 -load /100 
        }}>
            <div className="fondo" style={{
                filter:`blur(${ 10 - load /10 }px)`
            }}></div>
            <div className="number"> {load}%</div>
           
        </div>
    </>)
}