import React from 'react';

class Footer extends React.Component {
    render() {
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
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                            <p><i className="fas fa-home mr-3"></i> Saltillo, Coah. 25280, México</p>
                            <p>
                                <a role="button" value="Enviar un email" href={"mailto:contacto@cit-its.org"} className="gris" >
                                    <i className="fas fa-envelope mr-3" ></i>contacto@cit-its.org
                                </a>
                            </p>
                        </div>

                    </div>

                    <hr />

                    <div className="row d-flex align-items-center">

                        <div className="col-md-7 col-lg-8">

                            <p className="text-center text-md-left">
                                © 2019 Copyright:
                                <a className="gris" href="https://cit-its.org" >
                                    <strong>cit-its.org</strong>
                                </a>
                            </p>
                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/citITS/" aria-label="CIT Facebook" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/cit_its/" aria-label="CIT Instagram" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-instagram"></i>
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