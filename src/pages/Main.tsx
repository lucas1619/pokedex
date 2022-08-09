import { useEffect, useState } from "react"
import { PokemonApi } from "@/services"
import { Pokemon } from "@/models"
import { PokemonAdapter } from "@/adapters"
import { PokemonCard } from "@/components"

import "./styles/main.css"

const Main = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([])

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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const filtered = pokemons.filter((pokemon : Pokemon) => {
      return pokemon.name.includes(value) || pokemon.number.toString().includes(value)
    })
    setFilteredPokemons(filtered)
    
  }

  useEffect(() => {
    getPokemons()
    setFilteredPokemons(pokemons)
  }, [])

  return (
    <section>
      <div>
        <input 
          type="text" 
          className="inputMain" 
          placeholder="Que pokemon buscas"
          onChange={handleOnChange}
        />
      </div>
      <div className="mainGrid">
        {filteredPokemons.map((pokemon : Pokemon, index : number) => (
            <PokemonCard
              key={`${pokemon.name}-${index+1}`}
              name={pokemon.name}
              number={pokemon.number}
            />
        ))}
      </div>
    </section>
  );
}

export { Main }; 