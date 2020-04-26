import React from "react";

// import "./Camp.css";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Projects"
    };
  }
  render() {
    return (
      <section className="projectssection">
        <h1>{this.state.title}</h1>
      </section>
    );
  }
}

export default Projects;
