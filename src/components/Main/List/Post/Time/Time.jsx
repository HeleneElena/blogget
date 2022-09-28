import React from 'react';
import style from './Time.module.css';
import formatDate from '../../../../../utils/formatDate';
import {PropTypes} from 'prop-types';

export const Time = ({date}) => (
  <time
    className={style.date}
    dateTime={formatDate(date)}
  >
    {formatDate(date)}
  </time>
);

Time.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};


