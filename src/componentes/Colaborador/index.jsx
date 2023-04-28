import "./Colaborador.css"
import { TiUserDelete, TiHeart, TiHeartOutline } from "react-icons/ti"

const Colaborador = (props) => {
    const { nombre,puesto,foto,equipo, id, fav} = props.datos
    const {colorPrimario,eliminarColaborador, like} = props
    return <div className="colaborador">
        <TiUserDelete className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <TiHeart color="red" onClick={() => like(id)}/> : <TiHeartOutline onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador