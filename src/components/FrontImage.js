/**
 * Created by moled on 14.04.2018.
 */

import React, { Component } from 'react';
import frontLogo from '../img/in_logo_medium.png';


class FrontImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: props.imgUrl,
            title: props.title,
            underTitle: props.underTitle
        }
    }

    render() {
        const frontImgStyle = {

            backgroundImage: `url(${this.state.imgUrl})`,

        };

        return(

            <div style={frontImgStyle} className="front-img" alt="front-img" >
                <img src={frontLogo}/>
                <h1 className="front-img-title">{this.state.title}</h1>
                <h3 >{this.state.underTitle}</h3>
            </div>

        )
    }
}

export default FrontImage;
