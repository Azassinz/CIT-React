import React, { Component } from 'react';
import TituloSeccion from '../components/TituloSeccion';
import ContenedorMeta from '../components/ContenedorMeta';

import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    es: {
      shortGoals: "Metas a corto plazo",
      iot: "Toma de protesta del CIT.",
      area: "Habilitar un área de desarrollo.",
      demo: "Demostración de prototipos de IoT en el concurso de programación local 2018.",
      teams: "Constituir equipos de trabajo multidisciplinarios.",
      share: "Difundir a preparatorias los módulos de especialidad de la Industria 4.0 para incrementar la matricula en las carreras.",
      talent: "Participación en el Hackaton Talent Land en la ciudad de Guadalajara, Jalisco.",
      longGoals: "Metas a largo plazo",
      competir: "Ser competitivos, siendo protagonistas en los torneos que se participen.",
      vinculo: "Vinculación escuela-empresa donde se recluten estudiantes para implementar proyectos en la Industria 4.0.",
      host: "Ser protragonistas de eventos académicos como Hackatones y Startups con la participación de universidades y/o tecnológicos locales.",
      participar: "Participación destacada en eventos locales, regionales y nacionales como lo es el ENEIT (Evento Nacional Estudiantil de Innovación Tecnológica)."
    },
    en: {
      shortGoals: "Short-term goals",
      iot: "Officially found CIT.",
      area: "Enable a development area.",
      demo: "IoT prototype demonstration in the 2018 local programming contest.",
      teams: "Build multidisciplinary work teams.",
      share: "Disseminate the Industry 4.0 specialty modules to high schools to increase enrollment in careers.",
      talent: "Participate in the Hackathon Talent Land in the city of Guadalajara, Jalisco.",
      longGoals: "Long-term goals",
      competir: "Be competitive, being protagonists in the tournaments that we take part.",
      vinculo: "School-company relationship where students are recruited to implement projects in Industry 4.0.",
      host: "Be protragonists of academic events such as Hackathon's and Startups with the participation of local universities.",
      participar: "Outstanding participation in local, regional and national events such as the ENEIT (Evento Nacional Estudiantil de Innovación Tecnológica)."
    }
});

class Metas extends Component {
  render() {
    strings.setLanguage(this.props.language);
    return (
        <div className="row container-fluid justify-content-center mb-xl-5 pb-xl-2 content-wrap">

            <div className="col-11 col-lg-5 m-4">
                <TituloSeccion title={strings.shortGoals} />
                <ContenedorMeta 
                imagen="1" 
                descripcion={strings.iot}
                icon="fas fa-check-circle"
                />
                <ContenedorMeta 
                imagen="2" 
                descripcion={strings.area}
                icon="fas fa-business-time"
                />
                <ContenedorMeta 
                imagen="3" 
                descripcion={strings.demo}
                icon="fas fa-check-circle"
                />
                <ContenedorMeta 
                imagen="4" 
                descripcion={strings.teams}
                icon="fas fa-check-circle"
                />
                <ContenedorMeta 
                imagen="5" 
                descripcion={strings.share}
                icon="fas fa-business-time"
                />
                <ContenedorMeta 
                imagen="6" 
                descripcion={strings.talent}
                icon="fas fa-check-circle"
                />
            </div>

            <div className="col-11 col-lg-5 m-4">
                <TituloSeccion title={strings.longGoals} />
                <ContenedorMeta 
                imagen="7" 
                descripcion={strings.competir}
                icon="fas fa-check-circle"
                />
                <ContenedorMeta 
                imagen="8" 
                descripcion={strings.vinculo}
                icon="fas fa-business-time"
                />
                <ContenedorMeta 
                imagen="9" 
                descripcion={strings.host}
                icon="fas fa-check-circle"
                />
                <ContenedorMeta 
                imagen="10" 
                descripcion={strings.participar}
                icon="fas fa-business-time"
                />
            </div>

        </div>
    );
  }
}

export default Metas;