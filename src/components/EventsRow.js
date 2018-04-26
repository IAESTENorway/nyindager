import React, { Component } from 'react';
import EventBox from "./EventBox";
import { Link } from 'react-router-dom'
import data from '../data.json'

class EventsRow extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="events-row">
                {
                    this.props.events.length > 0 ? this.props.events.map(event => {
                        const {name, date} = event;
                        const EventComp = () => (
                                <Link className ="event-box" to={`/${name.toLowerCase()}`}>
                                    <EventBox eventTitle={name} stringDate={date} event={event}/>
                                </Link>

                        );
                        return <EventComp/>
                    }) : ''
                }
            </div>
        );
    }
}

export default EventsRow;
