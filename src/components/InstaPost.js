import React from 'react';

import InstagramEmbed from 'react-instagram-embed';

class Noticias extends React.Component {
    render() {
        return (
            <InstagramEmbed
                className="m-4"
                url={this.props.url}
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        );
    }
}

export default Noticias;