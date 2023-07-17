import React, { Component } from 'react';
import PropType from 'prop-types'
import { AddButton, FormInfo, Input, LabelText } from './ContactForm.module';
class ContactForm extends Component {
    state = {
        name: '',
    number: '',
    }

    handleSubmit = (e) => {
  e.preventDefault();
  const infoContact = {
    ...this.state
  };
        this.props.onAddContact(infoContact);
        
  e.target.reset();
  this.setState({ name: '', number: '' });
}
    
    onInputChange = (e) => {
        const value = e.target.value;
        const fieldName = e.target.name;
        const type = e.target.type;
        if (type === 'number') {
    this.setState({ [fieldName]: Number.parseInt(value) });
  } else {
    this.setState({ [fieldName]: value });
  }
    }
    

    render() {
        return (
            <FormInfo onSubmit={this.handleSubmit}> 
        <LabelText> Name</LabelText>
        <Input
  type="text"
  name="name"
   pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                    value={this.state.name}
                    onChange={this.onInputChange}
        />
        <LabelText>Phone</LabelText>
    <Input
  type="tel"
  name="number"
pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                    value={this.state.number}
                    onChange={this.onInputChange}
        />
        <AddButton type='submit'>Add contact</AddButton>
    </FormInfo>)
    }
}

ContactForm.propTypes = {
onAddContact: PropType.func.isRequired,
}

export default ContactForm;