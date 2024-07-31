import React from "react";
import ContactItem from "./ContactItem";
import styles from "./contactList.module.css";

const ContactList = ({ contacts, onDeleteItem }) => {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul className={styles.contact}>
          {contacts.map((contact) => (
            <ContactItem
              onDeleteItem={onDeleteItem}
              key={contact.id}
              contact={contact}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
};

export default ContactList;
