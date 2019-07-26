import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        {/*this.props.match.params.id*/}
        <h1 className="display-4">About Contact Manager</h1>
        <p className="lead">Simple App to manage contacts</p>
        <p className="text-secondary">Version 1.0.0</p>
      </div>
    );
  }
}

export default About;

// Functional component counterpart and getting params from url example
// import React from 'react'

// export default (props) => {
//   return (
//     <div>
//      <span>{props.match.params.id}</span>
//     </div>
//   )
// }
