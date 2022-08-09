import { useEffect, useState } from "react"
import { PokemonApi } from "@/services"
import { Pokemon } from "@/models"
import { PokemonAdapter } from "@/adapters"
import { PokemonCard } from "@/components"

import "./styles/main.css"

const Main = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const getPokemons = async () => {
    const pokemonApi = PokemonApi.Instance
    try {
      const { status, data } = await pokemonApi.getPokemons(151)
      if(status === 200) {
        const { results } = data
        setPokemons(PokemonAdapter.axiosToPokemons(results))
      }

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <section className="mainGrid">
      {pokemons.map((pokemon : Pokemon, index : number) => (
          <PokemonCard
            key={`${pokemon.name}-${index+1}`}
            image={pokemon.image}
            name={pokemon.name}
            number={pokemon.number}
          />
      ))}
    </section>
  );
}

export { Main }; 