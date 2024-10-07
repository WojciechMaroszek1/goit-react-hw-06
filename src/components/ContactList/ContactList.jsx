import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact.jsx';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {
	return (
		<div className={css.contactList}>
			{contacts.map(contact => (
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
					deleteContacts={deleteContacts}
				/>
			))}
		</div>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.array,
	deleteContacts: PropTypes.func,
};

export default ContactList;
