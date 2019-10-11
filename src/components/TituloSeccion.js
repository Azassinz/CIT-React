import React from 'react';

class TituloSeccion extends React.Component {
    render() {
        return (
            <div className="row m-0">
                <div className="col-xl-6 mx-auto text-center">
                    <div className="section-title mb-100">
                        <h4>{this.props.title}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default TituloSeccion;