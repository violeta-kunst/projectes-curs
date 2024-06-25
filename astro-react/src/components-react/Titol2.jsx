
import "./Titol2.css";


function Titol2(props) {

    let {frase} = props;
    // let frase = props.frase;


    return (
        <>
            <h1 className="subratllat">{frase}</h1>
            <h1>{frase}</h1>
        </>
    )
}


export default Titol2;