import React, { useState } from "react";
import ContactList from "./ContactList";
import styles from "./Contracts.module.css";
import { v4 } from "uuid";

const Contacts = () => {
  const inputs = [
    { type: "text", name: "name", placeholder: "name" },
    { type: "text", name: "lastName", placeholder: "last name" },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "number", name: "phone", placeholder: "Phone" },
  ];
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [alert, setAlert] = useState("");

  const contactHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.email ||
      !contact.phone ||
      !contact.lastName
    ) {
      setAlert("Please enter a valid data");
      return;
    }
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      id: "",
    });
    setAlert("");
  };
  const removeContactHander = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContacts(newContact);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={contactHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactList onDeleteItem={removeContactHander} contacts={contacts} />
    </div>
  );
};
0;

export default Contacts;
