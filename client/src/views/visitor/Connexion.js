import Api from '../../Api/Api';
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({status: (location.state === null) ? 'eleve' : location.state.status})

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Api.post('/connexion', data).then((success) => {
            console.log(success);
        }).catch((e) => {
            console.log(e);
        })
    }

    const test = () => {
        Api.get('/profile').then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <div>
            <form method='POST' onSubmit={handleSubmit}>
                <input type="text" name="identifiant" onChange={handleChange}/>
                <input type="password" name="mdp" onChange={handleChange} />
                <button type="submit">Connexion</button>
            </form>
            
            <a onClick={() => navigate('/inscription', { state: {status: data.status} } )}>inscription</a>
        </div>
    );
}

export default App;