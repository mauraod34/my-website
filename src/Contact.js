import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Contact"
    };
  }
  render() {
    return (
      <section className="contactsection">
        <h1>{this.state.title}</h1>
      </section>
    );
  }
}

export default Contact;
