import React from 'react';
import TituloSeccion from '../components/TituloSeccion';
import TarjetaMiembro from '../components/TarjetaMiembro';

import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    es: {
      conocenos: "Conócenos",
      presidente: "Presidente - Fundador",
      vice: "Vicepresidente - Fundador",
      disenoF: "Jefe de Diseño - Fundador",
      secretario: "Secretario - Fundador",
      tesorero: "Tesorero - Fundador",
      programadorF: "Programación - Fundador",
      diseno: "Diseño",
      programador: "Programación",
      rs: "Redes Sociales",
      mecanica: "Mecánica",
      log: "Lógistica",
      hr: "Manejo de Personal - Fundador",
      innovacion: "Innovación",
      vinculacion: "Vinculación - Fundador",
      pClub: "Club de Programación - Fundador",
      proyectos:"Innovación de proyectos tecnológicos - Fundador"
    },
    en: {
      conocenos: "Know us",
      presidente: "President - Founder",
      vice: "Vice president - Founder",
      disenoF: "Chief Designer Officer - Founder",
      secretario: "Secretary - Founder",
      tesorero: "Treasurer - Founder",
      programadorF: "Programmer - Founder",
      diseno: "Designer",
      programador: "Programmer",
      rs: "Social networks",
      mecanica: "Mechanics",
      log: "Logistics",
      hr: "Human Resources - Founder",
      innovacion: "Innovation",
      vinculacion: "Linking Relations - Founder",
      pClub: "Programming Club - Founder",
      proyectos:"Technological projects leader - Founder"
    }
});

class Conocenos extends React.Component {
    render() {
        strings.setLanguage(this.props.language);
        return (
            <div className="content-wrap">
                <TituloSeccion title={strings.conocenos} />
                <div class="row m-0 text-center justify-content-center">
                    <TarjetaMiembro
                        imagen="david"
                        nombre="David Magallán"
                        puesto={strings.presidente}
                        enlace="https://www.linkedin.com/in/david-magall%C3%A1n-515865180/"
                    />
                    <TarjetaMiembro
                        imagen="davidlopez"
                        nombre="David López"
                        puesto={strings.vice}
                        enlace="https://www.linkedin.com/in/luis-david-l%C3%B3pez-valdes/"
                    />
                    <TarjetaMiembro
                        imagen="alex"
                        nombre="Alejandro Vilchis"
                        puesto={strings.disenoF}
                        enlace="https://www.linkedin.com/in/alexvilchis/"
                    />
                    <TarjetaMiembro
                        imagen="pinedo"
                        nombre="Fernando Pinedo"
                        puesto={strings.secretario}
                        enlace="https://www.linkedin.com/in/fernando-josue-pinedo-a85398128/"
                    />
                    <TarjetaMiembro
                        imagen="panchito"
                        nombre="Francisco Medellin"
                        puesto={strings.proyectos}
                        enlace="https://www.linkedin.com/in/fmedellinz/"
                    />
                    <TarjetaMiembro
                        imagen="nico"
                        nombre="Nicolás Cázares"
                        puesto={strings.tesorero}
                        enlace="https://www.linkedin.com/in/nicol%C3%A1s-c%C3%A1zares-mandujano-1191561a3/"
                    />
                    <TarjetaMiembro
                        imagen="sergio"
                        nombre="Sergio Saucedo"
                        puesto={strings.pClub}
                        enlace="https://www.linkedin.com/in/seulsale/"
                    />
                    <TarjetaMiembro
                        imagen="andres"
                        nombre="Andres Ramos"
                        puesto={strings.programadorF}
                        enlace="https://www.linkedin.com/in/andrés-ramos-córdova-151a2b16a"
                    />
                    <TarjetaMiembro
                        imagen="jorge"
                        nombre="Jorge Ostos"
                        puesto={strings.diseno}
                        enlace="https://www.linkedin.com/in/jorge-contreras-ostos-66718a171/"
                    />
                    <TarjetaMiembro
                        imagen="alexis"
                        nombre="Alexis González"
                        puesto={strings.programador}
                        enlace="https://www.linkedin.com/in/alexis-ricardo-garcia-gonzalez-30346a186"
                    />
                    <TarjetaMiembro
                        imagen="janice"
                        nombre="Janice Herrera"
                        puesto={strings.rs}
                        enlace="https://www.linkedin.com/in/janice-alesha-herrera-alvarez-323490183/"
                    />
                    <TarjetaMiembro
                        imagen="guillermo"
                        nombre="Guillermo Villarreal"
                        puesto={strings.mecanica}
                        enlace="https://www.linkedin.com/in/guillermo-villarreal-0791791b7/"
                    />
                    <TarjetaMiembro
                        imagen="mariana"
                        nombre="Mariana Villarreal"
                        puesto={strings.log}
                    />
                    <TarjetaMiembro
                        imagen="gabriela"
                        nombre="Gabriela Gonzalez"
                        puesto={strings.programador}
                        enlace="https://www.linkedin.com/in/gabriela-gonzalez-9a70541b1/"
                    />
                    <TarjetaMiembro
                        imagen="salma"
                        nombre="Salma Webb"
                        puesto={strings.programador}
                        enlace="https://www.linkedin.com/in/salma-webb-140b83160/"
                    />
                    <TarjetaMiembro
                        imagen="abel"
                        nombre="Abel Monsivais"
                        puesto={strings.hr}
                        enlace="https://www.linkedin.com/in/abel-monsivais-badillo-93295a191/"
                    />
                    <TarjetaMiembro
                        imagen="kineret"
                        nombre="Kineret Rivera"
                        puesto={strings.vinculacion}
                        enlace="https://www.linkedin.com/in/marcela-kineret-rivera-2021a9183/"
                    />
                    <TarjetaMiembro
                        imagen="marcela"
                        nombre="Marcela Zertuche"
                        puesto={strings.innovacion}
                    />
                    <TarjetaMiembro
                        imagen="monica"
                        nombre="Mónica Vázquez"
                        puesto={strings.innovacion}
                    />
                    <TarjetaMiembro
                        imagen="andrea"
                        nombre="Andrea Payan"
                        puesto={strings.log}
                    />
                    <TarjetaMiembro
                        imagen="rubi"
                        nombre="Rubí Aguirre"
                        puesto={strings.innovacion}
                        enlace="https://www.linkedin.com/in/rubi-aguirre-90716419a/"
                    />
                </div>
            </div>
        );
    }
}

export default Conocenos;