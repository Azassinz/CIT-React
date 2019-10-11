import React from "react";
import Jumbotron from "../components/PresentacionJumbotron";
import TarjetaNosotros from "../components/TarjetaNosotros";
import TituloSeccion from "../components/TituloSeccion";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron 
            title="¡Únete!"
            descripcion="Somos un grupo multidiscplinario de estudiantes que comparte el interés de impulsar las nuevas tendencias." 
            info="Envía tu CV ahora a contacto@cit-its.org"
            boton="Enlace al correo"    
            email="contacto@cit-its.org"
        />

        
            <TituloSeccion title="Nosotros" />

            <div className="row justify-content-center m-0">
                <TarjetaNosotros
                    icon="fa fa-flag cyan"
                    title="Misión"
                    content="Ser un grupo de estudiantes multidisciplinario que impulse la aplicación de las nuevas tendencias
                    tecnológicas en el sector público y privado, representando con orgullo al Instituto Tecnológico de
                    Saltillo."
                />
                <TarjetaNosotros
                    icon="fa fa-eye cyan"
                    title="Visión"
                    content="Ser reconocidos como el grupo estudiantil modelo para la incursión de las nuevas tecnologías
                    y promoverlas
                    dentro de nuestra comunidad, en sinergia con el “HUB Innovación Coahuila 4.0”."
                />
                <TarjetaNosotros
                    icon="fa fa-users cyan"
                    title="¿Qué nos representa?"
                    content={
                        <div className="row gris">
                            <div className="col-6">
                                <ol className="gris lista">
                                <li>Humildad</li>
                                <li>Pasión</li>
                                <li>Comunicación</li>
                                <li>Liderazgo</li>
                                </ol>
                            </div>
                            <div className="col-6">
                                <ol className="gris lista">
                                <li>Respeto</li>
                                <li>Compromiso</li>
                                <li>Identidad</li>
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