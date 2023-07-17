import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from '../Filter/Filter';
import { Container } from './App.module';


export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onAddContact = (contact) => {
    const inContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (inContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        { id: nanoid(), ...contact },
        ...prevState.contacts,
      ],
    }));
  };

  remove = el => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== el),
      };
    });
  };

  filterAdd = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const filterContact = this.state.contacts.filter(el => {
      return el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    });
    return filterContact;
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter filterValue={this.state.filter} filter={this.filterAdd} />
        <ContactList contacts={this.filterContacts()} remove={this.remove} />
      </Container>
    );
  }
}
