import React from "react";

const ContactItem = ({ contact }) => {
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
        <button>❌</button>
      </li>
    </div>
  );
};

export default ContactItem;
