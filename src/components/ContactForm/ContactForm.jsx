import React, { useState } from 'react';
import PropType from 'prop-types'
import { AddButton, FormInfo, Input, LabelText } from './ContactForm.module';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const infoContact = {name, number};
    onAddContact(infoContact);
        
    e.target.reset();
    setName('');
    setNumber('');
  };
    
  const handleNameChange = e => {
    setName(e.target.value)
  }

    const handleNumberChange = e => {
    setNumber(e.target.value)
  }
 
  return (
    <FormInfo onSubmit={handleSubmit}>
      <LabelText> Name</LabelText>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />
      <LabelText>Phone</LabelText>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <AddButton type='submit'>Add contact</AddButton>
    </FormInfo>)
};

ContactForm.propTypes = {
onAddContact: PropType.func.isRequired,
}

export default ContactForm;