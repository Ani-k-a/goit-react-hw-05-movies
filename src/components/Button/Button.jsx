import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import css from './Button.module.css';

export default function Button() {
  return (
    <button className={css.button}>
      <FaArrowLeft className={css.arrow} />
      Go back
    </button>
  );
}
