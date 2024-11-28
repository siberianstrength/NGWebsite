import React, {useContext} from 'react';
import './Main.css'
import InputButton from '../../InputButton/InputButton'
import { AuthContext } from '../../../context';


const Main = () => {
    
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.setItem('auth', 'false')
    }

    return (
        <div className='test'>
        test
        <InputButton onClick={logout}>Log out</InputButton>
        </div>
    );
}

export default Main;