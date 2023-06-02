import React from 'react';
import css from './ErrorViev.module.css';
import PropTypes from 'prop-types';

export function ErrorViev({ message }) {
  return (
    <section className={css.section}>
      <div className={css.title}>{message}</div>
    </section>
  );
}

ErrorViev.propTypes = {
  message: PropTypes.string.isRequired,
};
