import React, { useState } from "react";
import { Contact } from "../models/contact.class";
import ContactComponent from "./pure/contact";
import ContactForm from "./pure/forms/contactForm";

const ContactsListComponent = () => {
  //const defaultContact1 = new

  const defaultContact1 = new Contact(
    "Joshua ",
    "Arnao Canessa",
    "Email@Example1",
    true
  );
  const defaultContact2 = new Contact(
    "Name2",
    "Last2",
    "Email@Example2",
    false
  );
  const defaultContact3 = new Contact(
    "Name3",
    "Last3",
    "Email@Example3",
    false
  );

  const [contacts, setContacts] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);

  function conditionContact(contact) {
    console.log("Change state this contact", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].condition = !tempContacts[index].condition;

    setContacts(tempContacts);
  }

  function removeContact(contact) {
    console.log("Delete state this contact", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);

    setContacts(tempContacts);
  }

  function addContact(contact) {
    console.log("Add this contact", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Contacts</h5>
          </div>
          {/* Card Body {content} */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Email</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return (
                    <ContactComponent
                      key={index}
                      contact={contact}
                      condition={conditionContact}
                      remove={removeContact}
                    ></ContactComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <ContactForm add={addContact}></ContactForm>
      </div>
    </div>
  );
};

export default ContactsListComponent;
