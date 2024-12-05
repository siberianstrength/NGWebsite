import React, { useContext, useState } from "react";
import userIcon from "../../Assets/userIcon.png";
import passwordIcon from "../../Assets/passwordIcon.png";
import InputButton from '../../InputButton/InputButton';
import './Login.css';
import Switch from "../../Switch/Switch";
import { AuthContext } from '../../../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  // хранитель ошибок
  const [error, setError] = useState('');

  const login = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    // пустые поля
    if (username === '' || password === '') {
      setError('Поля не могут быть пустыми!');
      return;
    }
    
    // летсго
    if (username === 'test' && password === 'test') {
      setIsAuth(true);
      localStorage.setItem('auth', 'true');  // в localStorage мы зашли збс
      setError(''); // сброс ошибки
    } else {
      setError('Неверный логин или пароль!');
    }
  };

  return (
      <div>
        <div className="container">
          <Switch />
          <div className="header">
            <div className="text">Log in</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={login}>
            <div className="inputs">
              <div className="input">
                <img src={userIcon} alt="user icon" />
                <input
                    type="text"
                    placeholder='Введите логин:'
                    name='username'
                />
              </div>
              <div className="input">
                <img src={passwordIcon} alt="password icon" />
                <input
                    type="password"
                    placeholder='Введите пароль:'
                    name='password'
                />
              </div>
            </div>
            {error && <div className="errorMessage">{error}</div>} {/* ошибка */}
            <div className="submitContainer">
              <InputButton className='login'>Войти</InputButton>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Login;
