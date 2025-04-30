import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js";

const cadastrarUsuario = async (email, senha) => {
    try {
        const credencialUsuario = await createUserWithEmailAndPassword(auth, email, senha);
        return credencialUsuario.user;
    } catch (erro) {
        throw erro;
    }
}

export default cadastrarUsuario;