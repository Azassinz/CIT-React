import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

class PresentacionJumbotron extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3 guindo"> {this.props.title} </h1>
                    <p className="lead gris"> {this.props.descripcion} </p>
                    <hr className="my-2" />
                    <p className="gris" > {this.props.info} </p>
                    <p className="lead">
                        <a href={"mailto:" + this.props.email}>  
                        <Button className="info-btn"> {this.props.boton} </Button>
                        </a>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default PresentacionJumbotron;