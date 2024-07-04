import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useContext, useEffect, useState } from 'react';
import { SignOut } from '../../apis/Login';
import { UserLogged } from '../../contexts/UserLogged';

export const Home = () => {
    const userOnCtx = useContext(UserLogged);
    const navigate = useNavigate();
    const [newHours, setNewHours] = useState('');

    useEffect(()=>{
        let getNewDate = new Date();
        let hours = getNewDate.getHours();

        if(hours > 12 && hours <= 18) {
            setNewHours("Boa tarde ☀");
        } else if (hours > 18 && hours <= 24) {
            setNewHours("Boa noite 🌙");
        } else if (hours > 5 && hours < 12) {
            setNewHours("Bom dia 🌤");
        }
    }, [newHours]);

    
    const signOut = () => SignOut();

    return (
        <C.Container>
            <p>{newHours}, obrigado por escolher o nosso site!"</p>
            <button onClick={signOut}>sair</button>
        </C.Container>
    )
}