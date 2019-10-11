import React from 'react';

class TarjetaMiembro extends React.Component {
    render() {
        return (
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img
                    src={require(`../assets/images/miembros/${this.props.imagen}.png`)} alt="" width="100"
                    className="img-fluid mb-3  " />
                    <h5 className="mb-0 gris">{this.props.nombre}</h5><span className="small text-uppercase text-muted guindo">{this.props.puesto}</span>
                    <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item"><a href={this.props.enlace} className="social-link"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TarjetaMiembro;