import { PokemonAdapter } from "@/adapters";
import { Pokemon } from "@/models";
import { PokemonApi } from "@/services";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Detail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
    const dispatch = useDispatch();

    const pokemons = useSelector((state: any) => state.pokemon.pokemons);

    const getPokemon = async () => {

      if(id !== undefined && pokemons.length === 151) {
        const pokemon = pokemons[parseInt(id) - 1];
        console.log(pokemon);
        if(pokemon !== undefined && pokemon.height !== undefined) {
          setPokemon(pokemon);
          return
        }
      }

      const pokemonApi = PokemonApi.Instance;
      try {
        const response = await pokemonApi.getPokemon(id);
        if(response.status === 200) {
          const adaptedPokemon = PokemonAdapter.axiosToPokemon(response);
          setPokemon(adaptedPokemon);
          dispatch({ type: "SET_POKEMON", payload: adaptedPokemon });
        }
      } catch (error) {
        console.error(error);
      }
      
    }
    
    useEffect(() => {
      getPokemon()
    }, [])
    return (
      <div>
        <img src={pokemon.image} alt={pokemon.name} />
        <h2 className="capitalize">{pokemon.name}</h2>
        <p>{typeof pokemon.height === 'number' ? pokemon.height / 10 : 0} metros</p>
        <p>Tipos: {pokemon.types?.toString()}</p>
        <div>
          <h3>Estadisticas base</h3>
          <p>Ataque: {pokemon.baseStats?.attack}</p>
          <p>Ataque especial: {pokemon.baseStats?.specialAttack}</p>
          <p>Defensa: {pokemon.baseStats?.defense}</p>
          <p>Defensa especial: {pokemon.baseStats?.specialDefense}</p>
          <p>Velocidad: {pokemon.baseStats?.speed}</p>
        </div>
      </div>
    );
  }
  
  export { Detail }; 