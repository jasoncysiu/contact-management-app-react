import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteConactHandler = (id) => {
        props.getContactId(id);
      };
      
    const renderContactList = props.contacts.map((contact) => {
        return (
           <ContactCard contact = {contact}
           clickHander={deleteConactHandler}
           key={contact.id}
           ></ContactCard>
        );
      });

  return <div className="ui celled list">
    {renderContactList}
  </div>;
};

export default ContactList;
