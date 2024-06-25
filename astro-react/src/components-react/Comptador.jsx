import { useState } from "react";

function Comptador(){

    let [valor, setValor] = useState(5);

    function menys(){
        let nouValor = valor-1;
        setValor(nouValor);
        console.log(nouValor)
    }
    function mes(){
        setValor(valor+1);
    }

    return (
        <>
            <button onClick={menys}>Menys</button>
            <p>{valor}</p>
            <button onClick={mes}>Més</button>
        </>
    )
}

export default Comptador;