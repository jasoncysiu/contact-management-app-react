import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    { id: 1, name: "Kaspm", email: "sss@gmail.com" },
    { id: 1, name: "Kaspm", email: "sss@gmail.com" }
  ];
  console.log('asdas',props.contacts); // Check the contacts prop

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteConactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>

  )
};

export default ContactList;
