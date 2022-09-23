import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import "../../styles/contact.scss";

const ContactComponent = ({ contact, condition, remove }) => {
  /*
   ** Function that returns icon depending
   ** on state of the users
   */
  function contactConditionIcon() {
    if (contact.condition) {
      return (
        <i
          onClick={() => condition(contact)}
          className="bi-toggle-on task-action col"
          style={{ color: "green" }}
        >
          <p style={{ fontSize: "12px" }}>On line</p>
        </i>
      );
    } else {
      return (
        <i
          onClick={() => condition(contact)}
          className="bi-toggle-off task-action col"
          style={{ color: "gray" }}
        >
          {" "}
          <p style={{ fontSize: "12px" }} s>
            Off line
          </p>
        </i>
      );
    }
  }
  return (
    <tr className="fw-normal">
      <td className="align-middle">
        <span className="ms-2">{contact.name}</span>
      </td>
      <td className="align-middle">
        <span>{contact.lastname}</span>
      </td>
      <td className="align-middle">
        <span>{contact.email}</span>
      </td>
      <td className="align-middle">
        <div className="row ">
          {contactConditionIcon()}
          <i
            className="bi-trash task-action col"
            style={{ color: "tomato", fontSize: "16px" }}
            onClick={() => remove(contact)}
          ></i>
        </div>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  condition: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactComponent;
