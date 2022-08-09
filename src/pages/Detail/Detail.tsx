import { PokemonAdapter } from "@/adapters";
import { Pokemon } from "@/models";
import { PokemonApi } from "@/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

    const getPokemon = async () => {
      const pokemonApi = PokemonApi.Instance;
      try {
        const response = await pokemonApi.getPokemon(id);
        if(response.status === 200) {
          setPokemon(PokemonAdapter.axiosToPokemon(response));
          console.log(pokemon);
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
        <h1>Detail from {id} pokemon!</h1>
      </div>
    );
  }
  
  export { Detail }; 