import React from 'react';

class TarjetaNosotros extends React.Component {
    render() {
        return (
            <div className={this.props.grids}>
                <div className="single-service cards-inicio">
                    <i className={this.props.icon}></i>
                    <h4 className="guindo">{this.props.title}</h4>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default TarjetaNosotros;