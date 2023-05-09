import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Equipo.css";
const Equipo = (props) => {
  const obj = {
    backgroundColor: hexToRgba(props.colorPrimario, 0.6),
  };
 
  const {
    colaboradores,
    equipo,
    colorPrimario,
    eliminarColaborador,
    colorSecundario,
    actualizarColor,
    id,
    like
  } = props;
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />

          <h3 style={{ borderColor: colorPrimario }}>{equipo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => {
              return (
                <Colaborador
                  key={index}
                  datos={colaborador}
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                  like={like}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
