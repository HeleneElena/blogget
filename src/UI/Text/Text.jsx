import classNames from 'classnames';
import style from './Text.module.css';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fst${dsize}`]]: dsize},
  );

  return <As className={classes}>{children}</As> ;
};
