import style from './Heading.module.css';

export const Heading = ({text}) => {
    return (
        <h1 className={style.heading}>{text}</h1>
    )
}