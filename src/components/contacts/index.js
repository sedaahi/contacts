import { useState, useEffect } from "react";
import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "John",
      phone_number: "12344",
    },{
        fullname: "Doe",
      phone_number: "12344",
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);  //addContact ile contacts array'ne ekleme yapıldığında, array'in consoleda son halini göster

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} setContacts={setContacts} />
      <Form addContact={setContacts} contacts={contacts} /> 

    </div>
  );
}

export default Contacts;
