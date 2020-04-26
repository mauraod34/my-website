import React from "react";

import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Home"
    };
  }
  render() {
    return (
      <section className="homesection">
        <h1>{this.state.title}</h1>
      </section>
    );
  }
}

export default Home;
