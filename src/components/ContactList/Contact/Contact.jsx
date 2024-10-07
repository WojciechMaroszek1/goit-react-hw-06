import PropTypes from 'prop-types';
import css from '../Contact/Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

export const Contact = ({ id, name, number, deleteContacts }) => {
	return (
		<div key={id} id={id} className={css.contact}>
			<div className={css.text_box}>
				<p className={css.text}>
					<IoPersonSharp className={css.icon} />
					{name}
				</p>
				<p className={css.text}>
					<FaPhoneAlt className={css.icon} />
					{number}
				</p>
			</div>
			<button onClick={() => deleteContacts(id)} className={css.button}>
				Delete
			</button>
		</div>
	);
};

Contact.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	number: PropTypes.string,
	data: PropTypes.object,
	deleteContacts: PropTypes.func,
};
