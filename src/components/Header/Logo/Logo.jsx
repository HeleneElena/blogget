import style from './Logo.module.css';

export const Logo = () => (
  <a className={style.link} href='/'>
    <svg className={style.logo} width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M116 4H12C7.58 4 4 7.58 4 12V116C4 120.42 7.58 124 12 124H116C120.42 124 124 120.42 124 116V12C124 7.58 120.42 4 116 4Z" fill="#4DA71C"/>
      <path d="M109.7 4H11.5C9.51532 4.0144 7.61602 4.8092 6.21261 6.21261C4.80919 7.61602 4.0144 9.51532 4 11.5V109.4C3.99 113.54 7.34 116.89 11.48 116.9H109.6C113.74 116.91 117.09 113.56 117.1 109.42V11.5C117.19 7.45 113.97 4.09 109.92 4H109.7V4Z" fill="#5BB12C"/>
      <path d="M39.7 12.9C39.7 10.6 38.1 9.9 28.9 10.2C21.2 10.5 17.4 11.4 15.1 14.2C12.8 17 12.2 22.7 12.1 29.5C12.1 34.3 12.1 38.8 14.6 38.8C18 38.8 18 30.9 20.8 26.5C26.2 17.8 39.7 15.9 39.7 12.9V12.9Z" fill="#80E24A"/>
      <path d="M33.2 106V22C33.2 20.9 34.1 20 35.2 20H63.4C73.3 20 80.9 22 86.1 26C91.3 30 93.9 35.9 93.9 43.8C93.98 50.49 90.52 56.72 84.8 60.2C83.86 60.79 83.58 62.02 84.17 62.96C84.37 63.28 84.66 63.54 85 63.7C87.77 65.03 90.18 67.02 92 69.5C94.74 73.19 96.15 77.7 96 82.3C96 90.6 93.3 96.9 88.1 101.3C82.9 105.7 75.2 108 65.3 108H35.2C34.1 108 33.2 107.1 33.2 106ZM48.5 55C48.5 56.1 49.4 57 50.5 57H63.5C68.3 57 72 55.9 74.7 53.8C77.4 51.7 78.7 48.6 78.7 44.6C78.7 40.3 77.5 37.1 75 35.2C72.5 33.3 68.7 32.3 63.4 32.3H50.5C49.4 32.3 48.5 33.2 48.5 34.3V55ZM48.5 70.3V93.7C48.5 94.8 49.4 95.7 50.5 95.7H65.5C70.3 95.7 74 94.5 76.7 92.1C78.0679 90.8517 79.1443 89.3177 79.8529 87.6068C80.5615 85.8958 80.8848 84.0499 80.8 82.2C80.8 73.1 76.1 68.4 66.8 68.2H50.5C49.39 68.28 48.53 69.19 48.5 70.3V70.3Z" fill="white"/>
    </svg>
  </a>
);
