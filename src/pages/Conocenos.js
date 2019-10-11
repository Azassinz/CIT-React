import React from 'react';
import TituloSeccion from '../components/TituloSeccion';
import TarjetaMiembro from '../components/TarjetaMiembro';

class Conocenos extends React.Component {
    render() {
        return (
            <div>
                <TituloSeccion title="Conócenos" />
                <div class="row m-0 text-center justify-content-center">
                    <TarjetaMiembro
                        imagen="david"
                        nombre="David Magallán"
                        puesto="Presidente - Fundador"
                        enlace="https://www.linkedin.com/in/david-magall%C3%A1n-515865180/"
                    />
                    <TarjetaMiembro
                        imagen="davidlopez"
                        nombre="David López"
                        puesto="VicePresidente - Fundador"
                        enlace="https://www.linkedin.com/in/luis-david-l%C3%B3pez-valdes-b61451153/"
                    />
                    <TarjetaMiembro
                        imagen="alex"
                        nombre="Fernando Pinedo"
                        puesto="Jefe de Diseño - Fundador"
                        enlace="https://www.linkedin.com/in/alexvilchis/"
                    />
                    <TarjetaMiembro
                        imagen="pinedo"
                        nombre="Alejandro Vilchis"
                        puesto="Secretario - Fundador"
                        enlace="https://www.linkedin.com/in/fernando-josue-pinedo-a85398128/"
                    />
                    <TarjetaMiembro
                        imagen="nico"
                        nombre="Nicolás Cázares"
                        puesto="Tesorero - Fundador"
                    />
                    <TarjetaMiembro
                        imagen="sergio"
                        nombre="Sergio Saucedo"
                        puesto="Club de Programación - Fundador"
                        enlace="https://www.linkedin.com/in/seulsale/"
                    />
                    <TarjetaMiembro
                        imagen="andres"
                        nombre="Andres Ramos"
                        puesto="Programación - Fundador"
                        enlace="https://www.linkedin.com/in/andrés-ramos-córdova-151a2b16a"
                    />
                    <TarjetaMiembro
                        imagen="jorge"
                        nombre="Jorge Ostos"
                        puesto="Diseño"
                        enlace="https://www.linkedin.com/in/jorge-contreras-ostos-66718a171/"
                    />
                    <TarjetaMiembro
                        imagen="alexis"
                        nombre="Alexis González"
                        puesto="Programación"
                        enlace="https://www.linkedin.com/in/alexis-ricardo-garcia-gonzalez-30346a186"
                    />
                    <TarjetaMiembro
                        imagen="janice"
                        nombre="Janice Herrera"
                        puesto="Redes Sociales"
                    />
                    <TarjetaMiembro
                        imagen="guillermo"
                        nombre="Guillermo Villarreal"
                        puesto="Macánica"
                    />
                    <TarjetaMiembro
                        imagen="mariana"
                        nombre="Mariana Villarreal"
                        puesto="Lógistica"
                    />
                    <TarjetaMiembro
                        imagen="gabriela"
                        nombre="Gabriela Gonzalez"
                        puesto="Programación"
                    />
                    <TarjetaMiembro
                        imagen="salma"
                        nombre="Salma Webb"
                        puesto="Programación"
                    />
                </div>
            </div>
        );
    }
}

export default Conocenos;