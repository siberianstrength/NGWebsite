import React, {useContext} from "react";
import userIcon from "../../Assets/userIcon.png";
import passwordIcon from "../../Assets/passwordIcon.png";
import InputButton from '../../InputButton/InputButton'
import './Login.css'
import Switch from "../../Switch/Switch";
import { AuthContext } from '../../../context';


const Login = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = (event) => {
    console.log(1);
      // console.log(event.target.username.value == 'test');
      // console.log(event.target.password.value == 'test');
    // if ((event.target.username.value == 'test') && (event.target.password.value == 'test'))
    //   {
    //     event.preventDefault();
    //     setIsAuth(true);
    //     localStorage.setItem('auth', 'true')
    //   } 
    }

  return (
    <div>
      <div className="container">
        <Switch/> 
        <div className="header">
          <div className="text">Log in</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={() =>console.log(1)}>
          <div className="inputs">
            <div className="input">
              <img src={userIcon} alt=""/>
              <input type="text" placeholder='Введите логин:' name='username'/>
            </div>
            <div className="input">
             <img src={passwordIcon} alt="" />
             <input type="password" placeholder='Введите пароль:' name='password'/>
            </div>
          </div>
          <div className="submitContainer">
            <InputButton className='login'>Войти</InputButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
