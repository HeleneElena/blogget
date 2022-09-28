import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState, useContext} from 'react';
import {tokenContext} from './../../../context/tokenContext';
import {authContext} from './../../../context/authContext';

import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const {auth, clearAuth} = useContext(authContext);
  const [isBtnOpen, setIsBtnOpen] = useState(false);

  const logout = () => {
    delToken();
    clearAuth();
  };
    
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
          {isBtnOpen && <button onClick={logout} className={style.logout}>Выйти</button>}
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
  delToken: PropTypes.func,
};
