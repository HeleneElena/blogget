import React from 'react';
import style from './Time.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const Time = props => (
  <time
    className={style.date}
    dateTime={formatDate(props.date)}
  >
    {formatDate(props.date)}
  </time>
);

Time.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
