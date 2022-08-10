import { Pokemon } from "@/models";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

interface Props {
    pokemon: Pokemon;
}

const DetailPokemonCard = ({
    pokemon
} :Props) => {

    const dispatch = useDispatch();
    const selectedPokemons = useSelector((state: any) => state.pokemon.selectedPokemons);
    const isSelected = () => {
        return selectedPokemons.find((poke : any) => poke.number === pokemon.number) !== undefined;
    }
    const [selected, setSelected] = useState<boolean>(isSelected());


    const handleOnClickButton = (e : any) => {
        e.stopPropagation()
        e.preventDefault()
        const selected = isSelected()
        if (!selected) {
            dispatch({type: "ADD_TO_SELECTED_POKEMONS", payload:{
                name: pokemon.name,
                number: pokemon.number,
                image: pokemon.image,
                backgroundColor: pokemon.backgroundColor
            }})
        }
        else if(selected){
            dispatch({type: "REMOVE_FROM_SELECTED_POKEMONS", payload:{
                number: pokemon.number,
            }})
        }
        setSelected(!selected)
    }

    useEffect(() => {
        setSelected(isSelected());
    } , [selectedPokemons]);

    return (
        <div className="flex items-center content-center text-white rounded-2xl p-6"
        style={{
          backgroundColor: pokemon.backgroundColor ? `rgb(${pokemon.backgroundColor.toString()})` : "white",
        }}
      >
        <div className="mr-6">
          <h2 className="capitalize text-4xl text-center font-bold">{pokemon.name} #{pokemon.number}</h2>
          <img width={250} height={250} src={pokemon.image} alt={pokemon.name} />
          <p className="text-center text-xl">
            <b> Altura:</b> {typeof pokemon.height === 'number' ? pokemon.height / 10 : 0} metros
          </p>
          <p className="text-center text-xl">
            <b>Tipo:</b> {pokemon.types?.toString()}</p>
        </div>
        <div className="h-full flex flex-col">
          <h3 className="capitalize text-3xl font-bold">Estadisticas base</h3>
          <div className="grid grid-cols-2">
              <p><b>Ataque:</b> {pokemon.baseStats?.attack}</p>
              <p><b>Ataque especial:</b> {pokemon.baseStats?.specialAttack}</p>
              <p><b>Defensa:</b> {pokemon.baseStats?.defense}</p>
              <p><b>Defensa especial:</b> {pokemon.baseStats?.specialDefense}</p>
              <p><b>Velocidad:</b> {pokemon.baseStats?.speed}</p>
          </div>
          <button 
            onClick={handleOnClickButton} 
            className={`mt-6 ${!selected ? 'bg-blue-500 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-700'} text-white font-bold py-2 px-4 rounded-full`}>
                {!selected ? 'Agregar a la lista' : 'Quitar de la lista'}
          </button>
        </div>
      </div>
    )
}

export { DetailPokemonCard }