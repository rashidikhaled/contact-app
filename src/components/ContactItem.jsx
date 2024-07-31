import React from "react";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact, onDeleteItem }) => {
  return (
    <li className={styles.item} key={contact.id}>
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
  );
};

export default ContactItem;
