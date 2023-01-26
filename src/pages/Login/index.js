import label from "../../assets/label.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../services/firebaseConfig2";
//auth
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import './styles.css';

export const Login = () => {
    
    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    async function handleLoginFromGoogle() {
        await signInGoogle();
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);//auth

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        alert(user);
        //return console.log(user);
        
    }

    if (error) {
        alert('Usuário ou senha inválida');
        
    }

    if(!signed && !user) {
        return (
            <main className="container">

                <div className="label">
                    <img src={label} alt=""/>
                </div>


                <div className="centralize">

                    <div className="header">
                        <h1>Invision</h1>
                        <span>Boas-vindas ao Invision</span>
                    </div>

                    <label className="title" htmlFor="email">Email</label>
                    <input className="inputContainer" type="email" name="email" id="email" placeholder="insira seu email" onChange={(e) => setEmail(e.target.value)}/>
                    <label className="title" htmlFor="password">Senha</label>
                    <input className="inputContainer" type="password" name="password" id="password" placeholder="insira sua senha" onChange={(e) => setPassword(e.target.value)}/>
                    <a href="">Esqueceu sua senha?</a>
                    <button className="login" onClick={handleSignIn}>Entrar</button>
                    <span>---------------- ou ----------------</span>
                    <button className='signGoogle' onClick={() => handleLoginFromGoogle()}><img src={logo} alt="" />Login com Google</button>

                    <div className="footer">
                        <span>Novo no Invision?</span>
                        <Link to="/register">Cadastre-se</Link>
                    </div>

                </div>

                

            </main>
        );

    } else {
        return <Navigate to="/home" />;
    }

}