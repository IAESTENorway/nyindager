/**
 * Created by moled on 14.04.2018.
 */
import React, { Component } from 'react';

class TextComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            textDesc: props.text,
            bgColor : props.bgColor
        }
    }

    render() {
        const {title, textDesc} = this.state;

        const style = {
            backgroundColor: `${this.state.bgColor}`,
            textAlign: 'center',
        };
        return (
            <div style={style} className="text-comp">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="front-title">{title}</h1>
                        </div>

                        <div className="col-12">
                        <p>{textDesc}</p>
                    </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default TextComponent;
