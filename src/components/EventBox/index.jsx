import React, { Component } from "react";

class EventBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitle: props.eventTitle,
      stringDate: props.stringDate
    };
  }

  componentDidMount() {
    this.setState({ eventBoxHeight: `${this.eventBox.offsetWidth}` });
  }

  render() {
    return (
      <div
        style={{ height: this.state.eventBoxHeight }}
        ref={input => {
          this.eventBox = input;
        }}
      >
        <div>
          <h1>{this.state.eventTitle}</h1>
          <p>{this.state.stringDate}</p>
        </div>
      </div>
    );
  }
}

export default EventBox;
