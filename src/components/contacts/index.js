import { useState, useEffect } from "react";
import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  // useState array olmalı-> birden fazla elemanı tutmak istediğimiz için

  // sonra <Form>'a setContact'i gönderdik addContact adı ile ve Form Componentinin proplarına addContact'İ verki atamayı yapacak fonksiyonu o componente al (function'da)==>
  const [contacts, setContacts] = useState([
    {
      fullname: "John",
      phone_number: "12344",
    },{
        fullname: "Doe",
      phone_number: "12344",
    }
  ]);

  //Ekleme işlemi yapıldığında son halini görmek için
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} setContacts={setContacts} />
      <Form addContact={setContacts} contacts={contacts} /> 

      {/* eldeki eski verileride gönder */}
    </div>
  );
}

export default Contacts;
