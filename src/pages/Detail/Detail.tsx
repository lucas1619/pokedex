import { PokemonAdapter } from "@/adapters";
import { Pokemon } from "@/models";
import { PokemonApi } from "@/services";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Vibrant from "node-vibrant";
import "./styles/detail.css"
import { DetailPokemonCard } from "@/components";
const Detail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
    const dispatch = useDispatch();

    const pokemons = useSelector((state: any) => state.pokemon.pokemons);

    const getPokemon = async () => {

      if(id !== undefined && pokemons.length > 0) {
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
          if(adaptedPokemon.image) {
            const pallete = await Vibrant.from(adaptedPokemon.image).getPalette();
            adaptedPokemon.backgroundColor = pallete.Vibrant?.getRgb();
          }
          setPokemon(adaptedPokemon);
          if(pokemons.length > 0)
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
      <div className="flex justify-evenly items-start w-full">
        <Link className="py-2 px-4 text-black font-semibold text-3xl flex items-center justify-center" to="../../">
        <svg className="w-7 h-7 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Regresar
        </Link>
        <DetailPokemonCard pokemon={pokemon} />
      </div>
    );
  }
  
  export { Detail }; 