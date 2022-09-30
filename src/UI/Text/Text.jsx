import style from './Text.module.css';
import classNames from 'classnames';

import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    center,
    size,
    tsize,
    dsize,
    bold,
    medium,
    className,
    children,
    href,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style.bold]: bold},
    {[style.medium]: medium},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  );

  return (
    <As className={classes} href={href} onClick={onClick}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.array]),
  href: PropTypes.string,
  onClick: PropTypes.func,
};
