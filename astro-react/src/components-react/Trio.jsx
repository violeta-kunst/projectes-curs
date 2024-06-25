import Bola from "./Bola";
import "./Trio.css"
import { useState } from "react";

function Trio() {

    let [nums, setNums] = useState([10,11,12]);

    function calcula(){
        let nousNums = [];
        for (let i =0; i<3; i++){
            nousNums.push( Math.floor(Math.random()*50) + 1);
        }
        setNums(nousNums);
    }

    return (
        <>
            <div className="contenidor">
                {
                    nums.map(el => <Bola client:load color="green" numero={el} />)
                }
            </div>
            <button onClick={calcula}>Calcula</button>
        </>
    )
}

export default Trio;