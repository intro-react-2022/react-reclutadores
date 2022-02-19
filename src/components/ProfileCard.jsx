import * as React from "react";
import "./ProfileCard.scss";
const ProfileCard = (props) => {
  const { nombre, imagen, pais, celular, correo, genero } = props;

/* React.useEffect(()=>{
  console.log(props);
},[]); */

  return (
    <div className={`card-profile${genero==="male"?" card-gender-male":" card-gender-female"}`}>
      <img src={imagen} alt="profile-image" width="100%" />
      <h3>{nombre}</h3>
      <p>{pais}</p>
      <p>{celular}</p>
      <p>{correo}</p>
    </div>
  );
};

export default ProfileCard;
