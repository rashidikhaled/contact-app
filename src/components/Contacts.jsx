import React, { useState } from "react";
import ContactList from "./ContactList";

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

  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={contactHandler}
          />
        ))}
      </div>
      <button onClick={addHandler}>Add Contact</button>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} />
    </div>
  );
};
0;

export default Contacts;
