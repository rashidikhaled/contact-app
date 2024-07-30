import React from "react";

const ContactItem = ({ contact, onDeleteItem }) => {
  return (
    <div>
      <li key={contact.id}>
        <p>
          {contact.name} {contact.lastName}
        </p>
        <p>
          <span>📧</span>
          {contact.email}
        </p>
        <p>
          <span>📱</span>
          {contact.phone}
        </p>
        <button onClick={() => onDeleteItem(contact.id)}>❌</button>
      </li>
    </div>
  );
};

export default ContactItem;
 