import {useEffect, useState} from "react";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  Language: number;
  difficultyId: number;
  levelSpotTheDifference?: number;
  levelDoolhof1?: number;
  levelMensenTellen?: number;
  levelBoodschappen?: number;
  levelVoorwerpenLokaliseren?: number;
  levelDoolhof2?: number;
}

const games = [
    {id: 1, name: "Spot the Difference", port: 3001, levelKey: "levelSpotTheDifference", extraParams: (p: Patient) => `&difficultyId=${p.difficultyId}`},
    {id: 2, name: "Doolhof1", port: 3002, levelKey: "levelDoolhof1", extraParams: () => ""},
    {id: 3, name: "Mensen Tellen", port: 3003, levelKey: "levelMensenTellen", extraParams: () => ""},
    {id: 4, name: "Boodschappen", port: 3004, levelKey: "levelBoodschappen", extraParams: () => ""},
    {id: 5, name: "Voorwerpen Lokaliseren", port: 18888, levelKey: "levelVoorwerpenLokaliseren", extraParams: () => ""},
    {id: 6, name: "Doolhof2", port: 3005, levelKey: "levelDoolhof2", extraParams: () => ""},
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
            <header style={{ marginBottom: '30px', textAlign: 'center' }}>
                <h1>Welcome back, {patient.firstName}!</h1>
                <p>Select a game to play</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {games.map(game => {
                    const specificLevel = (patient as any)[game.levelKey] || 1;
                    return (
                        <div key={game.id} style={{
                            background: 'white',
                            padding: '20px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <h3 style={{ marginTop: 0 }}>{game.name}</h3>
                                {/* Display the game-specific level here */}
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                    Current Level: <strong>{specificLevel}</strong>
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    let url = `http://localhost:${game.port}?id=${patient.id}&level=${specificLevel}&lang=${patient.Language}`;
                                    if(game.extraParams) {
                                        url += game.extraParams(patient);
                                    }
                                    window.open(url, '_blank');
                                }}
                                style={{
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}
                            >
                                Start Game
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
