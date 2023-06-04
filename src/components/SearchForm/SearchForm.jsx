import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaSearch } from 'react-icons/fa';
import css from './SearchForm.module.css';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const schema = yup.object().shape({
  search: yup.string().min(2).required(),
});

const initialValues = {
  search: '',
};

export default function SearchFoarm({ submitForm }) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const handleSubmit = (values, { resetForm }) => {
    const { search } = values;
    submitForm(search);
    setSearchParams({ query: search });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off" autoFocus className={css.form}>
        <button type="submit" className={css.button}>
          <FaSearch />
        </button>

        <Field
          className={css.input}
          type="text"
          name="search"
          placeholder="Search movies"
        />
        <ErrorMessage
          name="search"
          className={css.errorMessage}
          component="div"
        />
      </Form>
    </Formik>
  );
}

SearchFoarm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
