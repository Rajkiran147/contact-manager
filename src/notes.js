// Lesson 1: Components

// Function Component

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>The App component</h1>
    </div>
  );
}

export default App;

// Class Component

import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
      </div>
    )
  }
}


return React.createElement(
  "div",
  { className: "App" },
  React.createElement("h1", null, "The App Component")
);

// Always return with one top level div
// cannot use attribute like class, for. Instead use htmlFor, className

// Lesson2: JSX Expressions

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const num1 = 2;
    const num2 = 3;
    const canShowMath = true;
    let math;
    if (canShowMath) {
      math = (
        <h4>
          {num1} + {num2} = {num1 + num2}
        </h4>
      );
    } else {
      math = null;
    }
    return (
      <div className="App">
        <h1>The App Component</h1>
        {canShowMath ? (
          <h4>
            {num1} * {num2} = {num1 * num2}
          </h4>
        ) : null}
        {math}
      </div>
    );
  }
}

export default App;


// Lesson 3: Props in function and class component

// App.JS

import React, { Component } from "react";
import Header from "./components/layout/Header";
import Contact from "./components/contacts/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Header branding="Contact Manager Heading" />
        <Contact
          name="Rajkiran"
          email="rajkiran@happyfox.com"
          phone="9790848142"
        />
        <Contact name="Swetha" email="swetha28@gmail.com" phone="9940594703" />
      </div>
    );
  }
}

export default App;

// Contact.js -> Class component a.k.a smart component
import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;

// Header.js -> Function Component a.k.a Dumb Component
import React from "react";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

export default Header;

// Lesson 4: TypeChecking with Proptypes
// Contact.js
import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}
// Can add it here or as static class method. Same for defaultProps
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;

// Header.js
import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "My app"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;


// Lesson 5: Css in React

// components/Contact.css
h4 {
  color: 'green'
}

// Header.js
// Inline styling
import React from "react";
import PropTypes from "prop-types";
import { red, blue } from "ansi-colors";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1 style={{color: red, fontSize: '24px'}}>{branding}</h1>
      <h2 style={headingStyle}>New</h2>
    </div>
  );
};

Header.defaultProps = {
  branding: "My app"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const headingStyle = {
  color: blue,
  fontSize: '18px'
}

export default Header;

// Contact.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import './contact.css'; // will not affect anywhere else except this component. Great for encapsulation 
import { throwStatement } from "@babel/types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}
// Can add it here or as static class method. Same for defaultProps
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;

// output which is jsx, logic which is state, proptypes etc and styling all wrapped up into a component. Encapsulated piece of content

// Events in React

<h4 onClick={this.showOnClick}>{name}</h4>

// To access this inside the function showOnClick defined above the render method either bind `this` like
<h4 onClick={this.showOnClick.bind(this)}>{name}</h4>

// or define a constructor and do it in this manner
constructor () {
  super()
  this.onShowClick = this.onShowClick.bind(this)
}

// or 

onShowClick = () => {
  console.log(this)
  // this is available if we use arrow methods
};

// Passing values to events
// e is available as a parameter

onShowClick = (e) => {
  console.log(e)
};

<h4 onClick={this.showOnClick.bind(this, name)}>{name}</h4>

onShowClick = (name, e) => {
  console.log(name)
};

// Changing state in react

onShowClick = e => {
  this.state = { showContactInfo: false } // Wrong. Don't mutate state directly. 
  this.setState({ showContactInfo: !this.state.showContactInfo }); // Right way to do it
};

// Also

<h4 onClick={()=> {
  this.setState({ showContactInfo: !this.state.showContactInfo });
}}>{name}</h4>


// State sharing across components. Before using context api

// contacts.js 
import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Rajkiran",
        email: "rajkiran@happyfox.com",
        phone: "9790848142"
      },
      {
        id: 2,
        name: "Swetha",
        email: "swetha_28@gmail.com",
        phone: "9940594703"
      },
      {
        id: 3,
        name: "Vaishnavi",
        email: "vaishu17@gmail.com",
        phone: "9940594702"
      }
    ]
  };
  deleteContact = id => {
    let { contacts } = this.state;
    let updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}


// contact.js
import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteContact = () => {
    this.props.onDeleteContact();
  };

  render() {
    const { contact } = this.props;
    const { name, email, phone } = contact;
    const {
      state: { showContactInfo }
    } = this;
    return (
      <div className="card card-body mb-3">
        <h4 onClick={this.onShowClick}>
          {name}
          <span
            style={{ cursor: "pointer", color: "#f00", float: "right" }}
            onClick={this.deleteContact}
          >
            x
          </span>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   contact: PropTypes.object.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// };

export default Contact;
