import React, { useState } from "react";

const Contacts = () => {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const contactHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };
  const addHandler = () => {
    console.log(ConstantSourceNode)
  };

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
      <button>Add Contact</button>
    </div>
  );
};

export default Contacts;
