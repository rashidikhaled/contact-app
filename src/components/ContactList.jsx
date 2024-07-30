import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDeleteItem }) => {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              onDeleteItem={onDeleteItem}
              key={contact.id}
              contact={contact}
            />
          ))}
        </ul>
      ) : (
        <p>No Contact Yet!</p>
      )}
    </div>
  );
};

export default ContactList;
