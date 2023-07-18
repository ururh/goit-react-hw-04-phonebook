import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from '../Filter/Filter';
import { Container } from './App.module';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filters, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (contact) => {
    const inContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (inContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts((prevState) => [
      { id: nanoid(), ...contact },
      ...prevState,
    ]);
  };

  const remove = (id) => {
    setContacts((prevState) =>
      prevState.filter(({ id: contactId }) => contactId !== id)
    );
  };

  const filterAdd = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filters.toLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      <Filter filterValue={filters} filter={filterAdd} />
      <ContactList contacts={filterContacts()} remove={remove} />
    </Container>
  );
};

export default App;
