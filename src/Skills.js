import React from "react";

// import "./Camp.css";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Skills"
    };
  }
  render() {
    return (
      <section className="skillssection">
        <h1>{this.state.title}</h1>
      </section>
    );
  }
}

export default Skills;
