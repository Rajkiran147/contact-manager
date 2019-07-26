// Class component a.k.a smart component
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { Consumer } from "../../context";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteContact = async (dispatch, id, e) => {
    e.stopPropagation();
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}/`);
      dispatch({ type: "DELETE_CONTACT", payload: { id } });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: { id } });
    }
  };

  render() {
    const { contact } = this.props;
    const { id, name, email, phone } = contact;
    const {
      state: { showContactInfo }
    } = this;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3" style={{ cursor: "pointer" }}>
              <h4 onClick={this.onShowClick}>
                {name}
                <Link
                  to={`/contacts/edit/${id}`}
                  style={{
                    cursor: "pointer",
                    float: "right",
                    marginLeft: "1rem",
                    color: "#000"
                  }}
                >
                  <i class="fa fa-pencil" />
                </Link>
                <span
                  style={{ cursor: "pointer", color: "#f00", float: "right" }}
                  onClick={this.deleteContact.bind(this, dispatch, id)}
                >
                  <i class="fa fa-trash" />
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
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// contact: PropTypes.object.isRequired,
// onDeleteContact: PropTypes.func.isRequired
// };

export default Contact;
