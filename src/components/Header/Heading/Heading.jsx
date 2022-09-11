import PropTypes from 'prop-types';
import style from './Heading.module.css';

export const Heading = ({text}) => (
  <h1 className={style.heading}>{text}</h1>
);

Heading.propTypes = {
  text: PropTypes.string,
};
