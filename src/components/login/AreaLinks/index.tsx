import * as C from './styles';

type Props = {
    facebookAuthBtnClicked: ()=>void;
    googleAuthBtnClicked: ()=>void;
}
export const AreaLink = ({facebookAuthBtnClicked, googleAuthBtnClicked}: Props) => {

    return (
        <C.AreaLinks>   
            <C.Buttonfacebook onClick={facebookAuthBtnClicked}>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/2504/2504903.png' 
                    alt='' />
                CONTINUAR COM O FACEBOOK
            </C.Buttonfacebook>
            <C.ButtonGoogle onClick={googleAuthBtnClicked}>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/2504/2504914.png' 
                    alt='' />
                CONTINUAR COM O GOOGLE
            </C.ButtonGoogle>
        </C.AreaLinks>
    )
}