import { useForm } from 'react-hook-form';
import * as C from './styles';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { SignInContext } from '../../contexts/SignInContext';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/login/HeaderLoguin';
import { facebookAuth, googleAuth } from '../../apis/Login';
import { AreaLink } from '../../components/login/AreaLinks';
import { Hr } from '../../components/login/Hr';
import { UserLogged } from '../../contexts/UserLogged';


const SignInForm = z.object({
    name: z.string({message: 'Campo obrigátorio'}).min(2, 'Caractéres minímo 2.'),
    password: z.string({message: 'Campo obrigátorio'}).min(8, 'Minímo 8 dígitos.'),
})
type SingInObject = z.infer<typeof SignInForm>;


export const SignIn = () => {
    const signinCtx = useContext(SignInContext);
    const userOnCtx = useContext(UserLogged);
    const navigate = useNavigate();

    const [userInvalidMessage, setUserInvalidMessage] = useState('');
 
    const {register, handleSubmit, formState: { errors }} = useForm<SingInObject>({
        resolver: zodResolver(SignInForm),
    });
    
    const formSubmit = (data: any) => {
        if(signinCtx?.user) {
            signinCtx?.user.filter((item) => {
                if(item.name === data.name.trim() && item.password === data.password.trim()) {
                    navigate('/');
                } else {
                    setUserInvalidMessage('Usúario ou senha invalido.')
                }
            })
        }
    }

    const handleNextSignUp = () => {
        navigate("/signup");
    }

    const facebookAuthBtnClicked = async () => {
        const user = await facebookAuth();
        
        if(user.user) {
            window.location.href = '/';
        } else {
            window.location.href = '/signin';
            alert("erro ao tentar entrar.")
        }
    }

    const googleAuthBtnClicked  = async () => {
        const user = await googleAuth();

        if(user.user) {
            window.location.href = '/';
        } else {
            window.location.href = '/signin';
            alert("erro ao tentar entrar.")
        }
    }

    return (
        <C.Container>
			<Header />
            <C.PageContainer>
                <C.P>Para continuar, faça login com sua conta.</C.P>

                <AreaLink 
                    facebookAuthBtnClicked={facebookAuthBtnClicked} 
                    googleAuthBtnClicked={googleAuthBtnClicked}
                />
                <Hr />

                <C.FormSignIn onSubmit={handleSubmit(formSubmit)}>
                    <C.InputArea>
                        <label>Endereço de e-mail ou nome de usuário</label>
                        <input 
                            placeholder='Endereço de e-mail ou nome de usuário'
                            {...register('name')}
                        />
                        {errors.name && <C.messageError>{errors.name.message}</C.messageError>}
                        <C.messageError>{userInvalidMessage}</C.messageError>
                    </C.InputArea>

                    <C.InputArea>
                        <label>Senha</label>
                        <input 
                            type="password"
                            placeholder='Senha'
                            {...register('password')}
                        />
                        {errors.password && <C.messageError>{errors.password.message}</C.messageError>}
                        <C.messageError>{userInvalidMessage}</C.messageError>
                    </C.InputArea>
                    <C.ButtonArea>
                        <a href=''>Esqueceu sua senha?</a>
                        <C.SubmitButton 
                            type="submit"
                            value="Entrar"
                        />
                    </C.ButtonArea>
                </C.FormSignIn>

                <C.NextSignUp>
                    <p>Não tem uma conta?</p>
                    <C.Button onClick={handleNextSignUp}>Cadastrar-se</C.Button>
                </C.NextSignUp>
            </C.PageContainer>
        </C.Container>
    )
}