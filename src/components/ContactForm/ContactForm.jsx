import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
	name: Yup.string().min(3, 'Name is too short').max(50, 'Name is too long').required('Required'),
	number: Yup.string().min(3, 'Number is too short').max(50, 'Number is too long').required('Required'),
});

const ContactForm = ({ addContacts }) => {
	const nameId = useId();
	const numberId = useId();

	const handleSubmit = (values, actions) => {
		const newContact = {
			...values,
			key: '',
			id: '',
		};
		console.log(values);
		addContacts(newContact);
		actions.resetForm();
	};
	return (
		<Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} validationSchema={userSchema}>
			<Form className={css.form}>
				<div className={css.field_box}>
					<label htmlFor={nameId}>Name</label>
					<Field className={css.form_field} type="text" name="name" id={nameId}></Field>
					<ErrorMessage className={css.error} name="name" component="div" as="span" />
				</div>
				<div className={css.field_box}>
					<label htmlFor={numberId}>Number</label>
					<Field className={css.form_field} type="text" name="number" id={numberId}></Field>
					<ErrorMessage className={css.error} name="number" component="div" as="span" />
				</div>
				<button type="submit" className={css.button}>
					Add contact
				</button>
			</Form>
		</Formik>
	);
};
ContactForm.propTypes = {
	addContacts: PropTypes.func,
};
export default ContactForm;
