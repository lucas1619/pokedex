import { useSelector } from 'react-redux';
import { PokemonCard } from '@/components/PokemonCard';
import { Pokemon } from '@/models';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css'

const SelectedPokemons = () => {
    const selectedPokemons = useSelector((state: any) => state.pokemon.selectedPokemons);
    useEffect(()=>{
        console.log(selectedPokemons)
    }, [selectedPokemons]);
    return (
        <aside className='selectedGridBox'>
            <h1 className='title'>¡Listos para la batalla!</h1>
            <div className='selectedPokemonsGrid'>
                {selectedPokemons.map((pokemon : Pokemon) => (
                    <Link to={`/detail/${pokemon.number}`} key={`selected-${pokemon.name}-${pokemon.number}`}>
                        <PokemonCard
                            name={pokemon.name}
                            number={pokemon.number}
                            originalImage={pokemon.image}
                        />
                    </Link>
                ))}
            </div>
        </aside>
    );
}

export { SelectedPokemons };