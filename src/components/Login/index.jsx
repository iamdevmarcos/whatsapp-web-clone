import './style.css';
import { api } from '../../services/api';

export const Login = ({ onReceive }) => {
    const handleFacebookLogin = async () => {
        const result = await api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert('Erro!');
        }
    }

    return (
        <div className="login">
            <button
                onClick={handleFacebookLogin}
            >
                Logar com facebook
            </button>
        </div>
    );
}