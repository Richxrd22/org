import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Colaborador = (props) => {
  const { id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => {
          eliminarColaborador(id);
        }}
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={props.datos.foto} alt={props.datos.nombre} />
      </div>
      <div className="info">
        <h4>{props.datos.nombre}</h4>
        <h5>{props.datos.puesto}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};
export default Colaborador;
