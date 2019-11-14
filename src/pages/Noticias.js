import React from 'react';
import TituloSeccion from "../components/TituloSeccion";
import InstaPost from "../components/InstaPost";

import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    es: {
        noticias: "Noticias"
    },
    en: {
        noticias: "News"
    }
});

class Noticias extends React.Component {
    render() {
        strings.setLanguage(this.props.language);
        return (
            <div className="row m-0 justify-content-center">
                <div className="col-12 justify-content-center">
                    <TituloSeccion title={strings.noticias} />
                </div>
            
                <div className="row w-100 m-0 justify-content-center">
                    <InstaPost
                        url="https://www.instagram.com/p/B4u6roRBnDq/"
                    />
                    <InstaPost
                        url="https://www.instagram.com/p/B4ldWMchYDF/"
                    />
                    <InstaPost
                        url="https://www.instagram.com/p/B4jQSgFh7P3/"
                    />
                    <InstaPost
                        url="https://www.instagram.com/p/B4Tl79Kh6j4/"
                    />
                    <InstaPost
                        url="https://www.instagram.com/p/B3a6lOIBmEV/"
                    />
                    <InstaPost
                        url="https://www.instagram.com/p/B2kyUIZgzlI/"
                    />
                </div>
            </div>
        );
    }
}

export default Noticias;