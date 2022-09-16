import PropTypes from 'prop-types';
import {Text} from './../../../UI/Text';
import style from './Heading.module.css';


export const Heading = ({text}) => (
  <Text 
    As="h1"
    size={22}
    tsize={26} 
    center
    className={style.heading}>
    {text}
  </Text>
);

Heading.propTypes = {
  text: PropTypes.string,
};
