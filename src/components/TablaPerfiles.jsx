import * as React from "react";
import "./TablaPerfiles.scss";
const TablaPerfiles = (props) => {
  const { usuariosParaTabla } = props;

  //console.log("TablaPerfiles", usuariosParaTabla);
  React.useEffect(()=>{
    return ()=>{
      console.log("TablaPerfiles: Retirando tabla");
    }
  }, []);
  return (
    <React.Fragment>
      {usuariosParaTabla.length > 0 && (
        <table className="contenedor-tabla">
          <thead>
            <tr>
              <th>nombre</th>
              <th>pais</th>
              <th>celular</th>
              <th>correo</th>
              <th>genero</th>
            </tr>
          </thead>
          <tbody>
            {usuariosParaTabla.map(
              ({ nombre, pais, celular, correo, genero }, index) => (
                <tr key={index} className={`table-data-row${genero==="male"?" row-gender-male":" row-gender-female"}`}>
                  <td>{nombre}</td>
                  <td>{pais}</td>
                  <td>{celular}</td>
                  <td>{correo}</td>
                  <td>{genero}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};
export default TablaPerfiles;
