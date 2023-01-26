import label from "../../assets/label.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../services/firebaseConfig2";
//auth
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import './styles.css';

export const Register = () => {
    
    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    async function handleLoginFromGoogle() {
        await signInGoogle();
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth); //auth

    function handleSignOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        return console.log(user);
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
                        <span>Começando</span>
                    </div>

                    <label className="title" >Nome</label>
                    <input className="inputContainer" type="text" name="name" id="name" placeholder="insira seu nome" />
                    <label className="title" htmlFor="email">Email</label>
                    <input className="inputContainer" type="email" name="email" id="email" placeholder="insira seu email" onChange={(e) => setEmail(e.target.value)}/>
                    <label className="title" htmlFor="password">Senha</label>
                    <input className="inputContainer" type="password" name="password" id="password" placeholder="insira sua senha" onChange={(e) => setPassword(e.target.value)}/>
                    
                    <button className="login" onClick={handleSignOut}>Cadastre-se</button>
                    <span>------------ ou ------------</span>
                    <button className='signGoogle' onClick={() => handleLoginFromGoogle()}><img src={logo} alt="" />Cadastre-se com Google</button>

                    <div className="footer">
                        <span>Já possui uma conta Invision?</span>
                        <Link to="/">Entre</Link>
                    </div>

                </div>

                

            </main>
        );

    } else {
        return <Navigate to="/home" />;
    }

}