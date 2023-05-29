import React from 'react';
import css from './ErrorViev.module.css';
import PropTypes from 'prop-types';

export function ErrorViev({ message }) {
  return <div className={css.title}>{message}</div>;
}

ErrorViev.propTypes = {
  message: PropTypes.string.isRequired,
};
