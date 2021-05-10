import styles from './ContactsList.module.css'
import PropTypes from 'prop-types';

const ContactsListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li className={styles.contactListItem}>
      {name}: {phone}{' '}
      <button onClick={() => onRemove(id)} className={styles.btnDelete}>
        delete
      </button>
    </li>
  );
};
const ContactsList = ({ contacts, onRemove }) => {
  console.log('{ contacts, onRemove }', { contacts, onRemove });

  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsListItem {...contact} onRemove={onRemove} key={contact.id} />
      ))}
    </ul>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
ContactsList.propTypes = {
  // contacts: PropTypes.arrayOf().isRequired,
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ContactsList