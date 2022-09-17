import Api from '../../Api/Api';
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({status: location.state.status})

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.identifiant !== '' && data.prenom !== '' && data.nom !== '' && data.mdp !== '' && data.mdp === data.c_mdp) {
            Api.post('/inscription', data).then((success) => {
                console.log(success);
            }).catch((e) => {
                console.log(e);
            })
        }
    }

    return (
        <div>
            <form method='POST' onSubmit={handleSubmit}>
                <input type="text" name="identifiant" placeholder='Insérer un identifiant' onChange={handleChange} />
                <input type="text" name="nom" placeholder='Insérer un nom' onChange={handleChange} />
                <input type="text" name="prenom" placeholder='Insérer un prénom' onChange={handleChange} />
                <input type="password" name="mdp" placeholder='Insérer un mot de passe' onChange={handleChange} />
                <input type="password" name="c_mdp" placeholder='Insérer un mot de passe' onChange={handleChange} />
                <button type="submit" className="btn btn-primary">Inscription</button>
            </form>
            
            <a onClick={() => navigate('/')}>revenir page accueil</a>
        </div>
    );
}

export default App;