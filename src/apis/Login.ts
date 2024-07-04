import { FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebaseConfig";

const googleProvider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();

export const facebookAuth = async () => {
    const fbAuth = await signInWithPopup(auth, fbprovider);
    return fbAuth;
}

export const googleAuth = async () => {
    const ggAuth = await signInWithPopup(auth, googleProvider);
    return ggAuth;
}


export const SignOut = async () => {
    signOut(auth)
    .then(() => {
        window.location.href = '/signin';
        alert('deslogado')
    }).catch((error) => {
        alert("Erro ao sair.")
        window.location.href = '/';
    });
}
    