import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "About"
    };
  }
  render() {
    return (
      <section className="aboutsection">
        <h1>{this.state.title}</h1>
      </section>
    );
  }
}

export default About;
