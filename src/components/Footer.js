/**
 * Created by moled on 14.04.2018.
 */
import React, { Component } from 'react';
import mainData from "../data.json";
import iaesteLogo from "../img/iaeste_small_orange.png"

class Footer extends Component {
    render() {
        const partners = mainData.partners;
        const urlBase = "http://pires.no";

        return (

            <footer>
            <p> Våre samarbeidspartnere </p>
                <div className="partners-container">
                    {
                        partners.length > 0 ? partners.map(partner => {
                            const {name, logoUrl, webUrl} = partner;
                            const PartnersComp = () => (
                                <a className="partner-item" href={webUrl}>
                                    <img src={urlBase + logoUrl}/>
                                </a>
                            );
                            return <PartnersComp/>
                        }) : ''
                    }
                </div>
                <a href="https://iaeste.no" className="iaeste-info ">
                    <img src={iaesteLogo}/>
                    <p>IAESTE Norge</p>

                </a>
            </footer>

        );
    }
}

export default Footer;
