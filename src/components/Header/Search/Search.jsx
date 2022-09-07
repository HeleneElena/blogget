import style from './Search.module.css';

export const Search = () => {
    return (
        <form className={style.form}>
           <input className={style.search} type="search"></input>
           <button className={style.button}>
                <svg className={style.svg} width="128" height="128" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M126.25 110.675L101.325 85.75C100.2 84.625 98.675 84 97.075 84H93C99.9 75.175 104 64.075 104 52C104 23.275 80.725 0 52 0C23.275 0 0 23.275 0 52C0 80.725 23.275 104 52 104C64.075 104 75.175 99.9 84 93V97.075C84 98.675 84.625 100.2 85.75 101.325L110.675 126.25C113.025 128.6 116.825 128.6 119.15 126.25L126.225 119.175C128.575 116.825 128.575 113.025 126.25 110.675ZM52 84C34.325 84 20 69.7 20 52C20 34.325 34.3 20 52 20C69.675 20 84 34.3 84 52C84 69.675 69.7 84 52 84Z" fill="black"/>
                    </g>
                </svg>
           </button>
        </form>
    )
}