import React, { Component } from 'react';
import TituloSeccion from '../components/TituloSeccion';
import ContenedorMeta from '../components/ContenedorMeta';

class Metas extends Component {
  render() {
    return (
        <div>

            <div class="col-11 col-lg-5 m-4">
                <TituloSeccion title="Metas a corto plazo" />
                <ContenedorMeta 
                imagen="1" 
                descripcion="Instituir el club de Internet de las cosas (IoT)."
                />
                <ContenedorMeta 
                imagen="2" 
                descripcion="Habilitar un área de desarrollo."
                />
                <ContenedorMeta 
                imagen="3" 
                descripcion="Demostración de prototipos de IoT en el concurso de programación local 2018."
                />
                <ContenedorMeta 
                imagen="4" 
                descripcion="Constituir equipos de trabajo multidisciplinarios."
                />
                <ContenedorMeta 
                imagen="5" 
                descripcion="Difundir a preparatorias los módulos de especialidad de la Industria 4.0 para incrementar la matricula en las carreras."
                />
                <ContenedorMeta 
                imagen="6" 
                descripcion="Participación en el Hackaton Talent Land en la ciudad de Guadalajara, Jalisco."
                />
            </div>

            <div class="col-11 col-lg-5 m-4">
                <TituloSeccion title="Metas a largo plazo" />
                <ContenedorMeta 
                imagen="7" 
                descripcion="Ser competitivos, siendo protagonistas en los torneos que se participen."
                />
                <ContenedorMeta 
                imagen="8" 
                descripcion="Vinculación escuela-empresa donde se recluten estudiantes para implementar proyectos en la Industria 4.0."
                />
                <ContenedorMeta 
                imagen="9" 
                descripcion="Ser protragonistas de eventos académicos como Hackatones y Startups con la participación de universidades y/o tecnológicos locales."
                />
                <ContenedorMeta 
                imagen="10" 
                descripcion="Participación destacada en eventos locales, regionales y nacionales como lo es el ENEIT (Evento Nacional Estudiantil de Innovación Tecnológica)."
                />
            </div>

        </div>
    );
  }
}

export default Metas;