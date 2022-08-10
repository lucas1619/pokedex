import { useEffect, useState } from "react"
import { PokemonApi } from "@/services"
import { Pokemon } from "@/models"
import { PokemonAdapter } from "@/adapters"
import { PokemonCard } from "@/components"

import { useSelector, useDispatch } from "react-redux"

import "./styles/main.css"
import { Link } from "react-router-dom"

const Main = () => {

  const pokemons = useSelector((state: any) => {
    return state.pokemon.pokemons
  })
  const dispatch = useDispatch()

  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([])

  const totalPokemons = 151

  const getPokemons = async () => {
    if(pokemons.length) {
      setFilteredPokemons(pokemons)
      return
    }
    const pokemonApi = PokemonApi.Instance
    try {
      const response = await pokemonApi.getPokemons(totalPokemons)
      if(response.status === 200) {
        const pokemons = PokemonAdapter.axiosToPokemons(response)
        dispatch({ type: "SET_POKEMONS", payload: pokemons })
        setFilteredPokemons(pokemons)
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
          <Link key={`${pokemon.name}-${index.toString()}`} to={`/detail/${pokemon.number}`}>
            <PokemonCard
              number={pokemon.number}
              name={pokemon.name}
              originalImage={pokemon.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export { Main }; 