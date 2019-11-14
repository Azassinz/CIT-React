import React from "react";
import Jumbotron from "../components/PresentacionJumbotron";
import TarjetaNosotros from "../components/TarjetaNosotros";
import TituloSeccion from "../components/TituloSeccion";

import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    es: {
        unete: "¡Únete!",
        somos: "Somos un grupo multidiscplinario de estudiantes que comparte el interés de impulsar las nuevas tendencias.",
        cv: "Envía tu CV ahora a contacto@cit-its.org",
        correo: "Enlace al correo",
        us: "Nosotros",
        mision: "Misión",
        vision: "Visión",
        textmision: "Ser un grupo de estudiantes multidisciplinario que impulse la aplicación de las nuevas tendencias tecnológicas en el sector público y privado, representando con orgullo al Instituto Tecnológico de Saltillo.",
        textvision: "Ser reconocidos como el grupo estudiantil modelo para la incursión de las nuevas tecnologías y promoverlas dentro de nuestra comunidad, en sinergia con el “HUB Innovación Coahuila 4.0”.",
        weare: "¿Qué nos representa?",
        Humildad: "Humildad",
        Pasion: "Pasión",
        Comunicacion: "Comunicación",
        Liderazgo: "Liderazgo",
        Respeto: "Respeto",
        Compromiso: "Compromiso",
        Identidad: "Identidad",
    },
    en: {
        unete: "Join us!",
        somos: "We are a multidisciplinary group of students who share the interest of driving new trends.",
        cv: "Send now your CV to contacto@cit-its.org",
        correo: "Link to mail",
        us: "Us",
        mision: "Mission",
        vision: "Vision",
        textmision: "To be a multidisciplinary group of students that promotes the application of new technological trends in the public and private sectors, proudly representing Instituto Tecnológico de Saltillo.",
        textvision: "To be recognized as the model student group for the incursion of new technologies and promote them within our community, in synergy with the “HUB Innovación Coahuila 4.0 ”.",
        weare: "¿What define us?",
        Humildad: "Lowliness",
        Pasion: "Passion",
        Comunicacion: "Communication",
        Liderazgo: "Leadership",
        Respeto: "Respect",
        Compromiso: "Commitment",
        Identidad: "Identity    ",
    }
});

class Home extends React.Component {
  render() {
    strings.setLanguage(this.props.language);
    return (
      <div>
        <Jumbotron 
            title={strings.unete}
            descripcion={strings.somos} 
            info={strings.cv}
            boton={strings.correo}
            email="contacto@cit-its.org"
        />

        
            <TituloSeccion title={strings.us} />

            <div className="row justify-content-center m-0">
                <TarjetaNosotros
                    grids="col-lg-4 col-md-6 "
                    icon="fa fa-flag cyan"
                    title={strings.mision}
                    content={strings.textmision}
                />
                <TarjetaNosotros
                    grids="col-lg-4 col-md-6 "
                    icon="fa fa-eye cyan"
                    title={strings.vision}
                    content={strings.textvision}
                />
                <TarjetaNosotros
                    grids="col-lg-4 col-md-6 "
                    icon="fa fa-handshake-o cyan"
                    title={strings.weare}
                    content={
                        <div className="row gris">
                            <div className="col-6">
                                <ol className="gris lista">
                                <li>{strings.Humildad}</li>
                                <li>{strings.Pasion}</li>
                                <li>{strings.Comunicacion}</li>
                                <li>{strings.Liderazgo}</li>
                                </ol>
                            </div>
                            <div className="col-6">
                                <ol className="gris lista">
                                <li>{strings.Respeto}</li>
                                <li>{strings.Compromiso}</li>
                                <li>{strings.Identidad}</li>
                                </ol>
                            </div>
                        </div>
                    }
                />

            </div>

      </div>
    );
  }
}
 
export default Home;