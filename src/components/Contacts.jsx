import React, { useState } from "react";
import ContactList from "./ContactList";

const Contacts = () => {
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
    if (!contact.name || !contact.email || !contact.phone || contact.lastName) {
      setAlert("Please enter a valid data");
      return;
    }
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setAlert("");
  };
  console.log(contacts);

  return (
    <div>
      <input
        name="name"
        placeholder="name"
        type="text"
        onChange={contactHandler}
      />
      <input
        name="lastName"
        placeholder="last name"
        type="text"
        onChange={contactHandler}
      />{" "}
      <input
        name="email"
        placeholder="email"
        type="email"
        onChange={contactHandler}
      />{" "}
      <input
        name="phone"
        placeholder="phone"
        type="number"
        onChange={contactHandler}
      />
      <button onClick={addHandler}>Add Contact</button>
      <div>{!alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;
