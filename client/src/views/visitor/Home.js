import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    return (
        <div>
            <a onClick={() => navigate('/connexion', { state: { status: 'direction' } } )}>direction</a>
            <br />
            <a onClick={() => navigate('/connexion', { state: { status: 'prof' } })}>prof</a>
            <br />
            <a onClick={() => navigate('/connexion', { state: { status: 'eleve' } })}>eleve</a>
        </div>
    );
}

export default App;