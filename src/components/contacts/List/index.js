import { useState } from "react";
import "../style.css";

function List({ contacts,setContacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText)
    );
  });

const deleteItem = function (event, index) {
  event.preventDefault();
  const newContacts = [...contacts]; // mevcut elemanların kopyasını al
  newContacts.splice(index, 1); // indexten başla 1 adet sil
  setContacts(newContacts);// yeni halini aktar
};

return (
  <div>
    <input
      placeholder="Filter contact"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
    
    <ul className="list">
      {filtered.map((contact, i) => (
        <li key={i}>
          {contact.fullname} - {contact.phone_number}
          <button className="deleteBtn" onClick={(e) => deleteItem(e,i)}>Delete</button>
        </li>
      ))}
    </ul>

    <p>Number of Contacts: {filtered.length}</p>
  </div>
);
}

export default List;
