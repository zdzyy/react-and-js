import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log(props.titulo);
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado}/>
    </div>
}

export default CampoTexto