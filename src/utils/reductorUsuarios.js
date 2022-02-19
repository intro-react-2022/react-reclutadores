
export const reductor = (usuario) => {
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