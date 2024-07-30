import React from "react";

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
