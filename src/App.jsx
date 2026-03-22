import { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Cookies from 'js-cookie';
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    const savedStars = Cookies.get('favorites');
    if (savedStars) setStarred(JSON.parse(savedStars));
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      // Fetches 6 random pokemon from the first 150
      const randomOffset = Math.floor(Math.random() * 144);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${randomOffset}`);
      const data = await res.json();

      const detailedData = await Promise.all(
        data.results.map(async (p) => {
          const pRes = await fetch(p.url);
          return pRes.json();
        })
      );
      setPokemonList(detailedData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const toggleStar = (name) => {
    let updatedStars = starred.includes(name) 
      ? starred.filter(n => n !== name) 
      : [...starred, name];
    
    setStarred(updatedStars);
    Cookies.set('favorites', JSON.stringify(updatedStars), { expires: 7 });
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">PokéViewer: Responsive Gallery</h1>
      {loading ? (
        <div className="text-center"><Spinner animation="border" /></div>
      ) : (
        <Row>
          {pokemonList.map(p => (
            <PokemonCard 
              key={p.id} 
              pokemon={p} 
              isStarred={starred.includes(p.name)} 
              onToggleStar={toggleStar}
            />
          ))}
        </Row>
      )}
    </Container>
  );
}

export default App;
