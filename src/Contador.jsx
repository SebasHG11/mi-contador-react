import { useState } from "react"
import { ContMenos } from "./components/ContMenos"
import { ContMas } from "./components/ContMas"
import { ContIngreso } from "./components/ContIngreso"


export const Contador = () => {
    
    const[num, setNum] = useState(0)

    const [nuevo, setNuevo] = useState(1)

    const sumar = (event) =>{
        event.preventDefault()
        if(nuevo != ''){
            setNum(num + nuevo)
        }else{
            setNum(num + 1)
        }
    }

    const restar = (event) =>{
        event.preventDefault()
        if(nuevo !== '' && (num-nuevo) >= 0) setNum(num - nuevo)
        if(num > 0 && nuevo === '') setNum(num - 1)
        
    }

  return (
    <>
           <ContIngreso 
            nuevo={nuevo}
            setNuevo={setNuevo}/> 

        <div className="container">
            
            <ContMenos 
            restar={restar}/>
            <div>{num}</div>
            <ContMas 
            sumar={sumar}/>
        </div>
    </>
    
  )
}
