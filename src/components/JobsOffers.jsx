import React, { useState, useEffect } from "react";
import request from "../api/request";

const JobsOffers = () => {
  const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   request.get("/cars").then((response) => setJobs(JSON.parse(response.data)));
  // }, []);

  const jobss = [
    {
      puesto: "jardinero",
      ubicacion: "Rio Tercero",
      descripcion: "esto es una descripcion",
      expnecesaria: "casi nada",
      expvalorable: "buena presencia",
      beneficios: "swiss medical",
    },
    {
      puesto: "handy man",
      ubicacion: "Rio Tercero",
      descripcion: "esto es una descripcion",
      expnecesaria: "casi nada",
      expvalorable: "buena presencia",
      beneficios: "swiss medical",
    },
    {
      puesto: "back-end developer",
      ubicacion: "Rio Tercero",
      descripcion: "esto es una descripcion",
      expnecesaria: "casi nada",
      expvalorable: "buena presencia",
      beneficios: "swiss medical",
    },
  ];
  const jobsList = jobss.map((item) => {
    return (
      <li>
        <div class="collapsible-header">
          <i class="material-icons">arrow_drop_down</i>
          <span class="col s9 left-align">{item.puesto}</span>
          <i class="material-icons">chevron_right</i>
          <span class="col s3 left-align">{item.ubicacion}</span>
        </div>
        <div class="collapsible-body">
          <p>Descripcion del puesto</p>
          <div>{item.descripcion}</div>
          <p>Experiencia/habilidades necesarias</p>
          <div>{item.expnecesaria}</div>
          <p>Experiencia/habilidades valorables</p>
          <div>{item.expvalorable}</div>
          <p>Beneficios</p>
          <div>{item.beneficios}</div>
          <div class="boton">
            <a
              class="waves-effect waves-light btn modal-trigger col s3 offset-s9 pulse"
              href="#modal1"
            >
              Aplicar!
            </a>
            <div id="modal1" class="modal modal-fixed-footer">
              <div class="modal-content">
                <h4>Formulario requerido</h4>
                <div class="row">
                  <form class="col s12">
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
                      <div class="input-field col s12">
                        <i class="material-icons prefix">mail</i>
                        <input id="email" type="email" class="validate" />
                        <label for="email">Email</label>
                        <span
                          class="helper-text"
                          data-error="wrong"
                          data-success="right"
                        >
                          Helper text
                        </span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12">
                        <i class="material-icons prefix">textsms</i>
                        <textarea
                          id="textarea2"
                          class="materialize-textarea"
                          data-length="120"
                        ></textarea>
                        <label for="textarea2">Carta de presentacion</label>
                      </div>
                    </div>
                    <form action="#">
                      <div class="file-field input-field">
                        <div class="btn">
                          <span>
                            <i class="material-icons">folder_open</i>
                          </span>
                          <input type="file" multiple />
                        </div>
                        <div class="file-path-wrapper">
                          <input
                            class="file-path validate"
                            type="text"
                            placeholder="Seleccione su CV"
                          />
                        </div>
                      </div>
                    </form>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <a
                  href="./index.html"
                  class="modal-close waves-effect waves-green btn-flat"
                >
                  Confirmar
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <main class="container">
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="titulo1">
              <h1 class="titulo1 card-title center-align">Ofertas Laborales</h1>
            </div>
            <div class="row">
              <div class="col s10 offset-s1">
                <ul class="collapsible">
                  <li>
                    <div class="collapsible-header">
                      <i class="material-icons">work</i>
                      <span class="col s9 left-align">Puesto de trabajo</span>
                      <i class="material-icons">place</i>
                      <span class="col s3 left-align">Localidad</span>
                    </div>
                  </li>
                  {jobsList}
                  <li>
                    <div class="collapsible-header">
                      <ul class="pagination col s12 center-align">
                        <li class="disabled">
                          <a href="#!">
                            <i class="material-icons">chevron_left</i>
                          </a>
                        </li>
                        <li class="active">
                          <a href="#!">1</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!">2</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!">3</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!">4</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!">
                            <i class="material-icons">chevron_right</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobsOffers;
