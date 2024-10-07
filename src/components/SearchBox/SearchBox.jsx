import css from './SearchBox.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ value, handleFilterChange }) => {
	const searchFieldId = useId();
	return (
		<Formik>
			<Form>
				<div className={css.form}>
					<label htmlFor={searchFieldId}>Find contacts by name</label>
					<div>
						<FaSearch className={css.icon} />
						<Field
							className={css.field}
							type="text"
							name="name"
							id={searchFieldId}
							onChange={handleFilterChange}
							value={value}
						/>
					</div>
				</div>
			</Form>
		</Formik>
	);
};

SearchBox.propTypes = {
	value: PropTypes.string,
	handleFilterChange: PropTypes.func,
};

export default SearchBox;
