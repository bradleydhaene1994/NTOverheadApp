import {useEffect, useState} from "react";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  lastPlayedLevel: number;
  Language: number;
}

const games = [
    {id: 1, name: "Spot the Difference", port: 3001},
    {id: 2, name: "Doolhof1", port: 3002},
    {id: 3, name: "Mensen Tellen", port: 3003},
    {id: 4, name: "Boodschappen", port: 3004},
    {id: 5, name: "Voorwerpen Lokaliseren", port: 18888},
]

function App() {
  const [patient, setPatient] = useState<Patient | null>(null);
  
  useEffect(() => {
    fetch("http://localhost:5104/api/patients")
    .then(res => res.json())
    .then(data => setPatient(data))
    .catch(err => console.error("Is your API running?", err));
  }, [])
  
  if(!patient) return <h1>Searching for patient data...</h1>;

    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <header style={{ marginBottom: '30px' }}>
                <h1>Welcome back, {patient.firstName}!</h1>
                <p>Progress Level: {patient.lastPlayedLevel}</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {games.map(game => (
                    <div key={game.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3>{game.name}</h3>
                        <button
                            onClick={() => {
                                // This is the "Launch Command" that sends both ID and Level
                                const url = `http://localhost:${game.port}?id=${patient.id}&level=${patient.lastPlayedLevel}`;
                                window.open(url, '_blank');
                            }}
                            style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Start Game
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
