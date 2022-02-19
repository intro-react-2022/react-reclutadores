//import miLogo from "./logo.svg";
import { Fragment, useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import TablaPerfiles from "./components/TablaPerfiles";
import "./estilos/estilos.scss";
import { simularLlamadaDatos } from "./fake_api/simularLlamadasUsuarios";
import { reductor } from "./utils/reductorUsuarios";

function App() {
  //const [numeroDeVeces, setNumerodeVeces] = useState(0);
  const [misUsuarios, setMisUsuarios] = useState([]);
  const [vista, setVista] = useState("tabla");

  async function funcionInicial() {
    const nuevosUsuarios = await simularLlamadaDatos();
    const usuariosReducidos = nuevosUsuarios.map(reductor);
    setMisUsuarios(usuariosReducidos);
  }

  // logica de inicio
  // solo al inicio del componente
  useEffect(() => {
    funcionInicial();
  }, []);

  //logica de los usuarios
  useEffect(() => {
    // if(misUsuarios.length>0){
    console.log("Los usuarios han cambiado", misUsuarios.length);
    //}
  }, [misUsuarios]);
  const cambiarATabla = () => {
    setVista("tabla");
  };
  const cambiarATarjetas = () => {
    setVista("tarjeta");
  };
  return (
    <Fragment>
      <button onClick={vista === "tabla" ? cambiarATarjetas : cambiarATabla}>
        {vista === "tabla" ? "ver tarjetas" : "ver lista"}
      </button>
      {vista === "tabla" ? (
        <TablaPerfiles usuariosParaTabla={misUsuarios} />
      ) : (
        <div className="main-container">
          {misUsuarios.length === 0 && <h2>Cargando usuarios ...</h2>}

          {misUsuarios.map((usuario, index) => (
            <ProfileCard
              key={index}
              nombre={usuario.nombre}
              imagen={usuario.imagen}
              pais={usuario.pais}
              celular={usuario.celular}
              correo={usuario.correo}
              genero={usuario.genero}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default App;
