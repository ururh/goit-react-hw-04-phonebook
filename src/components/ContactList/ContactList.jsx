import PropType from 'prop-types'
import { ButtonDelete, ItemContact, List } from './ContactList.module';

const ContactList = ({ contacts, remove }) => (
    <List>
      {contacts.map((contact, id) => (
        <ItemContact key={id}>
          {contact.name}: {contact.number}
          <ButtonDelete
            type="button"
            onClick={()=>remove(contact.id)}
          >
            Delete
          </ButtonDelete>
        </ItemContact>
      ))}
    </List>
)

ContactList.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
    })
  ),
  remove: PropType.func.isRequired,
};

export default ContactList;