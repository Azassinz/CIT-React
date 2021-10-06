import React from 'react';

import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    es: {
        Contacto: "Contacto",
    },
    en: {
        Contacto: "Contact",
    }
});

class Footer extends React.Component {
    render() {
        strings.setLanguage(this.props.language);
        return (
            <footer className="page-footer font-small mdb-color pt-4">

                <div className="container text-center text-md-left">

                    <div className="row text-center text-md-left mt-3 pb-3">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Instituto Tecnológico de Saltillo
                            </h6>
                            <p>Blvd. Venustiano Carranza #2400, Colonia Tecnológico</p>
                        </div>


                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">{strings.Contacto}</h6>
                            <p><i className="fas fa-home mr-3"></i> Saltillo, Coah. 25280, México</p>
                            <p>
                                <a role="button" value="Enviar un email" href={"mailto:contacto@citmx.org"} className="gris" >
                                    <i className="fas fa-envelope mr-3" ></i>contacto@citmx.org
                                </a>
                            </p>
                        </div>

                    </div>

                    <hr />

                    <div className="row d-flex align-items-center">

                        <div className="col-md-7 col-lg-8">

                            <p className="text-center text-md-left">
                                © 2021 Copyright:
                                <a className="gris" href="https://citmx.org" >
                                    <strong>citmx.org</strong>
                                </a>
                            </p>
                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/citITS/" target="_blank" rel="noreferrer noopener" aria-label="CIT Facebook" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/cit_its/" target="_blank" rel="noreferrer noopener" aria-label="CIT Instagram" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.youtube.com/channel/UChobrGCsXmtI48jJvKHrmLA" target="_blank" rel="noreferrer noopener" aria-label="CIT Conecta YouTube" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://open.spotify.com/show/0nW3L3rj0D63gDI2DslsQ7?si=ybktGW3fTWyvVWiPmAdPxA" target="_blank" rel="noreferrer noopener" aria-label="CIT Conecta Spotify" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-spotify"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;