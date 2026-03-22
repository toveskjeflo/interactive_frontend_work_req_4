import { Card, Col, Button } from 'react-bootstrap';

const PokemonCard = ({ pokemon, isStarred, onToggleStar }) => {
  return (
    <Col sm={12} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
      <Card className="pokemon-card h-100 shadow-sm w-100">
        <div className="card-img-container text-center">
          <Card.Img 
            variant="top" 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name}
            style={{ width: '150px' }}
          />
        </div>
        <Card.Body className="text-center d-flex flex-column">
          <Card.Title className="pokemon-name text-capitalize">
            {pokemon.name}
          </Card.Title>
          <Card.Text className="flex-grow-1">
            <span className="badge bg-primary me-1">HT: {pokemon.height}</span>
            <span className="badge bg-success">WT: {pokemon.weight}</span>
            <div className="mt-2 text-muted small">
              Type: {pokemon.types.map(t => t.type.name).join(', ')}
            </div>
          </Card.Text>
          <Button 
            variant={isStarred ? "warning" : "outline-primary"} 
            className="btn-star mt-3"
            onClick={() => onToggleStar(pokemon.name)}
          >
            {isStarred ? "⭐ In Pokedex" : "☆ Catch It"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonCard;