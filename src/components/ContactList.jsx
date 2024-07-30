import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>No Contact Yet!</p>
      )}
    </div>
  );
};

export default ContactList;
