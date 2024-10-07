import '../components/App.module.css';

import { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';

import initialContacts from './ContactList/initialContacts.json';
import css from './App.module.css';

function App() {
	const [contacts, setContacts] = useState(() => {
		const savedContacts = localStorage.getItem('saved contacts');
		if (savedContacts !== null) {
			return JSON.parse(savedContacts);
		} else {
			return initialContacts;
		}
	});

	const [filter, setFilter] = useState('');
	const addContacts = newContact => {
		setContacts(prevContact => [...prevContact, newContact]);
	};

	const deleteContacts = id => {
		setContacts(prevContact => prevContact.filter(contact => contact.id !== id));
	};

	const handleFilter = evt => {
		setFilter(evt.target.value);
	};

	const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
	useEffect(() => {
		localStorage.setItem('saved contacts', JSON.stringify(filtredContacts));
		// localStorage.clear();
	}, [filtredContacts]);

	return (
		<div className={css.webstyle}>
			<h1>Phonebook</h1>
			<ContactForm addContacts={addContacts} />
			<SearchBox handleFilterChange={handleFilter} value={filter} />
			<ContactList contacts={filtredContacts} deleteContacts={deleteContacts} />
		</div>
	);
}

export default App;
