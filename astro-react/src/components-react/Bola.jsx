import "./Bola.css"

function Bola(props){

    let {numero, color} = props;
    
    let estils = {
        backgroundColor: color
    }


    return (
        <>

            <div style={estils} className="bola">
                {numero}
            </div>
        
        </>
    )
}

export default Bola;