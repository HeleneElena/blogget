import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';
import {Logout} from './Logout/Logout';

import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});
  const [isBtnOpen, setIsBtnOpen] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  }, [token]);
    

  return (
    <div className={style.container}>
      { auth.name ? (
        <> 
          <button onClick={() => setIsBtnOpen(!isBtnOpen)} className={style.btn}>
            <img 
              className={style.img} 
              src={auth.img} 
              title={auth.name} 
              alt={`Avatar ${auth.name}`} 
            />
          </button>
          {isBtnOpen && <Logout />}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} width={128} height={128} />
        </Text>
      )
      }     
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
