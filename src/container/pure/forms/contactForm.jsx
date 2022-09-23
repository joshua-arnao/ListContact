import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class";

const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const lastnameRef = useRef("");
  const emailRef = useRef("");

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      lastnameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newContact);
  }
  return (
    <div>
      <form
        onSubmit={addContact}
        className={"d-flex justify-content-center align-items-center mb-4"}
      >
        <div className="form-outline flex-fill">
          <input
            ref={nameRef}
            id="inputName"
            type={"text"}
            className="form-control form-control-lg"
            required
            autoFocus
            placeholder="Name"
          />
          <input
            ref={lastnameRef}
            id="inputLastame"
            type={"text"}
            className="form-control form-control-lg"
            required
            placeholder="Lastname"
          />
          <input
            ref={emailRef}
            id="inputEmail"
            type={"text"}
            className="form-control form-control-lg"
            required
            placeholder="contact@correo.com"
          />
          <button type="submit" className="btn btn-success btn-lg ms-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
