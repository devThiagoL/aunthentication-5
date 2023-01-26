import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Home = () => {
    const { signOut } = useContext(AuthGoogleContext);
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
};