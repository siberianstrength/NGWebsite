import React, {useContext} from 'react';
import './Main.css'
import InputButton from '../../InputButton/InputButton'
import { AuthContext } from '../../../context';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();

    const logout = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.setItem('auth', 'false')
    }

    const goToAllStats = () => {
        navigate('/allstats');
    }

    return (
        <div className='test'>
        test
        <InputButton onClick={logout}>Log out</InputButton>
        <InputButton onClick={goToAllStats}>Все показатели</InputButton>
        </div>
    );
}

export default Main;