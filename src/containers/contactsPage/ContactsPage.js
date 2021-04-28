import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = (props) => {
  const contacts = props.contacts;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);





  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      props.addContact(name, phone, email);
    };
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {
    const findDuplicateName = () => {
      const findName = contacts.find((contact) => contact.name === name);

      if(findName !== undefined) {
        return true;
      }
      return false;
    };
    if(findDuplicateName()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }

  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>{(duplicate && 'Contact already exists') || (!duplicate && 'Add Contact')}</h2>
        <ContactForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
