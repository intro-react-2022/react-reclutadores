import * as React from "react";
import logoPrincipal from "../estaticos/logo_RRHH.png";
class BarraNavegacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      usuarios: [],
      admin: "Jorge",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    //console.log("BARRA: Acabo de renderizarme");
    //document.title += " Clases";
  }
  componentDidUpdate() {
    console.log("BARRA: Acabo de actualizarme", this.state.contador);
    //
  }
  componentWillUnmount() {
    // console.log("BARRA: Adios");
    // document.title = "perfiles con react";
  }

  handleClick() {
    this.setState({ contador: this.state.contador + 2 });
    if (this.props.vista === "tabla") {
      this.props.cambiarATarjetas();
    } else {
      this.props.cambiarATabla();
    }
  }

  render() {
    return (
      <nav className="barra-navegacion">
        <div className="parte-izquierda">
          <div className="logo-container">
            <img
              src={logoPrincipal}
              alt="logo-reclutadores"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="logo-title">
            {this.props.titulo || "titulo default"}
          </div>
        </div>
        <button className="boton-vista" onClick={this.handleClick}>
          {this.props.vista === "tabla" ? "ver tarjetas" : "ver lista"}
        </button>
      </nav>
    );
  }
}

export default BarraNavegacion;
