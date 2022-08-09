import { Pokemon } from "@/models";

export class PokemonAdapter {
    public static axiosToPokemon(axiosPokemon : any) : Pokemon {
        const { data } = axiosPokemon;
        const pokemon : Pokemon = {
            name: data.name,
            number: data.id,
            image: data.sprites.front_default,
            height: data.height,
            types: data.types.map((type : any) => type.type.name),
            baseStats: {
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat
            }
        }
        return pokemon;
    }

    public static axiosToPokemons(axiosPokemons : any[]) : Pokemon[] {
        return axiosPokemons.map((axiosPokemon : any, index : number) => {
            return {
                name: axiosPokemon.name,
                number: index + 1,
                image: "",
                height: undefined,
                types: undefined,
                baseStats: undefined
            }
        });
    }
}