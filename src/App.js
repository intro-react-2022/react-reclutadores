//import miLogo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import "./estilos/estilos.scss";
import { simularLlamadaDatos } from "./fake_api/simularLlamadasUsuarios";

const reductor = (usuario) => {
  const { name, location, cell, email } = usuario;

  const { title, first, last } = name;
  const { country } = location;

  const genero = usuario.gender;
  return {
    nombre: `${title}-${first}-${last}`,
    pais: country,
    celular: cell,
    correo: email,
    imagen: usuario.picture.large,
    genero,
  };
};

function App() {
  //const [numeroDeVeces, setNumerodeVeces] = useState(0);
  const [misUsuarios, setMisUsuarios] = useState([]);
  async function init() {
    const nuevosUsuarios = await simularLlamadaDatos();
    //console.log(nuevosUsuarios);
    const usuariosReducidos = nuevosUsuarios.map(reductor);
    //console.log(usuariosReducidos);
    setMisUsuarios(usuariosReducidos);
  }

  useEffect(() => {
    init();
    //}, [numeroDeVeces]);
  }, []);
  /* const handleClick = () => {
    //console.log("Se hizo click!");
    setNumerodeVeces(numeroDeVeces + 1);
  }; */
  return (
    <div className="main-container">
      {misUsuarios.map((usuario) => (
        <ProfileCard
          nombre={usuario.nombre}
          imagen={usuario.imagen}
          pais={usuario.pais}
          celular={usuario.celular}
          correo={usuario.correo}
          genero={usuario.genero}
        />
      ))}
    </div>
  );
}

export default App;
