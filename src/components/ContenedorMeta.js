  import React from 'react';

  class ContenedorMeta extends React.Component {
    render() {
      return (
          <div className="row align-items-center justify-content-center mb-3">
            <div className="col-1"><img src={require(`../assets/images/${this.props.imagen}.png`)} alt=""/></div> 
            <div className="col-10">{this.props.descripcion}</div>
          </div>
      );
    }
  }

  export default ContenedorMeta;