import React from "react";
import request from "../api/request";

function postJob(job){
  request
    .post("/cars", JSON.stringify(job))
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
}

export default class JobsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puesto: "",
      ubicacion: "",
      descripcion: "",
      expnecesaria: "",
      expvalorable: "",
      beneficios: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
  return (
    <main class="container">
      <div class="card">
        <div class="row">
          <div class="col s12">
            <form id="form1" class="col s12">
              {/* <span class="titulo1 card-title">Formulario empleador</span>
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="first_name" type="text" class="validate" />
                  <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="last_name" type="text" class="validate" />
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">mail</i>
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    usuario@admin
                  </span>
                </div>
                <div class="input-field col s6">
                  <i class="material-icons prefix">person</i>
                  <input id="icon_telephone" type="tel" class="validate" />
                  <label for="icon_telephone">CUIT</label>
                </div>
                <div>
                  <a class="subheader subtitulo_empleador">
                    Datos de la empresa
                  </a>
                </div>
                <div class="divider" tabindex="-1"></div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">business</i>
                    <input id="first_name" type="text" class="validate" />
                    <label for="first_name">Nombe de la empresa</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">place</i>
                    <input id="first_name" type="text" class="validate" />
                    <label for="first_name">Localidad</label>
                  </div>
                </div> */}
              <div>
                <a class="subheader subtitulo_empleador">Puesto de trabajo</a>
              </div>
              <div class="divider" tabindex="-1"></div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">work</i>
                  <input
                    id="first_name"
                    type="text"
                    class="validate"
                    value={this.state.puesto}
                    onChange={this.handleInputChange}
                  />
                  <label for="first_name">Puesto de trabajo a ofrecer</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">place</i>
                  <input
                    id="first_name"
                    type="text"
                    class="validate"
                    value={this.state.ubicacion}
                    onChange={this.handleInputChange}
                  />
                  <label for="first_name">Localidad</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">send</i>
                  <textarea
                    id="textarea2"
                    class="materialize-textarea validate"
                    data-length="120"
                    value={this.state.descripcion}
                    onChange={this.handleInputChange}
                  ></textarea>
                  <label for="textarea2">descripción del puesto</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s4">
                  <i class="material-icons prefix">search</i>
                  <textarea
                    id="textarea2"
                    class="materialize-textarea validate"
                    data-length="120"
                    value={this.state.expnecesaria}
                    onChange={this.handleInputChange}
                  ></textarea>
                  <label for="textarea2">
                    Experiencia/habilidades necesarias
                  </label>
                </div>
                <div class="input-field col s4">
                  <i class="material-icons prefix">add</i>
                  <textarea
                    id="textarea2"
                    class="materialize-textarea validate"
                    data-length="120"
                    value={this.state.expvalorable}
                    onChange={this.handleInputChange}
                  ></textarea>
                  <label for="textarea2">
                    Experiencia/habilidades valorables
                  </label>
                </div>
                <div class="input-field col s4">
                  <i class="material-icons prefix">check</i>
                  <textarea
                    id="textarea2"
                    class="materialize-textarea validate"
                    data-length="120"
                    value={this.state.beneficios}
                    onChange={this.handleInputChange}
                  ></textarea>
                  <label for="textarea2">Beneficios</label>
                </div>
              </div>
              {/* </div> */}
              <button
                onClick={postJob(this.state)}
                id="alertabtn"
                class="modal-close waves-effect waves-light btn-flat right"
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
}
