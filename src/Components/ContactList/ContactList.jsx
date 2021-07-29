
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
    contacts.map(({ id, name, number }) => (
        <ul key={id} className={styles.ul}>
            <li className={styles.li}>{name}: {number}</li>
            <button>Delete</button>
        </ul>
    ))
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
//   onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;