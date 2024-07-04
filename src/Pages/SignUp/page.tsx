import { useForm } from 'react-hook-form';
import * as C from './styles';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { SignInContext } from '../../contexts/SignInContext';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/login/HeaderLoguin';

const SignInForm = z.object({
    name: z.string({message: 'Campo obrigátorio'}).min(2, 'Caractéres minímo 2.'),
    password: z.string({message: 'Campo obrigátorio'}).min(8, 'Minímo 8 dígitos.'),
    passwordVer: z.string({message: 'Campo obrigátorio'}).min(8, 'Minímo 8 dígitos.'),
})
type SingInObject = z.infer<typeof SignInForm>;

export const SignUp = () => {
    const signinCtx = useContext(SignInContext);
    const navigate = useNavigate();
    const [userInvalidMessage, setUserInvalidMessage] = useState('');
 
    const {register, handleSubmit, formState: { errors }} = useForm<SingInObject>({
        resolver: zodResolver(SignInForm),
    });
    
    //cria um novo usuario
    const formSubmit = (data: any) => {
        if(signinCtx?.user && data.password === data.passwordVer) {
            signinCtx?.setUser([...signinCtx?.user, { 
                id: signinCtx?.user.length + 1, 
                name: data.name.trim(), 
                password: data.password.trim()
            }]);
            navigate('/');
        } else {
            setUserInvalidMessage("Senha não bate uma com a outra.")
        }
   }

    const handleNextLogin = () => {
            navigate('/signin');
    }

    return (
        <C.Container>
            <Header />
            <C.PageContainer>
                <C.P>Registre-se e comece a explorar!</C.P>

                <C.FormSignIn onSubmit={handleSubmit(formSubmit)}>
                    <C.InputArea>
                        <label>Endereço de e-mail ou nome de usuário</label>
                        <input 
                            type="text"
                            placeholder='Endereço de e-mail ou nome de usuário'
                            {...register('name')}
                        />
                        {errors.name && <C.messageError>{errors.name.message}</C.messageError>}
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

                    <C.InputArea>
                        <label>Confirmar senha</label>
                        <input 
                            type="password"
                            placeholder='Confirmar senha'
                            {...register('passwordVer')}
                        />
                        {errors.password && <C.messageError>{errors.password.message}</C.messageError>}
                        <C.messageError>{userInvalidMessage}</C.messageError>
                    </C.InputArea>
                    <C.InputArea>
                        <C.SubmitButton 
                            type="submit"
                            value="Cadastrar"
                        />
                    </C.InputArea>
                </C.FormSignIn>

                <C.NextSignUp>
                    <p>Já tem uma conta?</p>
                    <C.Button onClick={handleNextLogin}>Login</C.Button>
                </C.NextSignUp>
            </C.PageContainer>
        </C.Container>
    )
}