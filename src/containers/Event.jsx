/**
 * Created by moled on 14.04.2018.
 */
import React, { Component } from 'react';
import FrontImage from '../components/FrontImage';
import Header from '../components/Header';
import RegisterCompany from '../components/RegisterCompany';
import Footer from '../components/Footer';
import { events } from '../resources/data.ts';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: props.match.params.event,
      event: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    // React Route keeps the scroll position from links, this is to scroll to top o event page
    window.scrollTo(0, 0);

    const event = events.find((e) => this.state.eventName === e.name.toLowerCase());
    this.setState({
      event,
      isLoading: false,
    });
  }

  dateToString(dateString) {
    const dateArray = dateString.split('-');
    const monthDateObj = new Date(dateString);

    const year = dateArray[0];
    const month = monthDateObj.toLocaleString('no-nb', { month: 'long' });
    const day = dateArray[2];

    return `${day}. ${month} ${year}`;
  }

  findEventByPropName() {
    for (let i = 0; i < events.events.length; i++) {
      if (this.state.eventName === events.events[i].name.toLowerCase()) {
        return events.events[i];
      }
    }
  }

  render() {
    const urlBase = 'http://pires.no';

    const {
      name, date, description, imgUrl, program,
    } = this.state.event;
    return !this.state.isLoading ? (
      <div className="Event fade-in">
        <Header />
        <FrontImage
          imgUrl={urlBase + imgUrl}
          title={`IAESTEs Næringslivsdager i ${name}`}
          underTitle={this.dateToString(date)}
        />
        {/* <TextComponent title="" text={description} />
        <TextComponent title="Program" text="" bgColor="#223847" /> */}
        <div className="program-container">
          {program.length > 0
            ? program.map((programEvent) => {
              const { timeString, description, eventHolder } = programEvent;
              return () => (
                <div className="program-item">
                  <h4>
                    {timeString}
                    {' '}
                  </h4>
                  {' '}
                  <h5>{description}</h5>
                  {' '}
                  <h6>{eventHolder}</h6>
                </div>
              );
            })
            : ''}
        </div>

        <RegisterCompany />
        <Footer />
      </div>
    ) : (
      'LOADING'
    );
  }
}
export default Event;
