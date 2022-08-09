import Api from "./Api";

class PokemonApi extends Api {

  private static _instance: PokemonApi

  constructor() {
    super('https://pokeapi.co/api/v2/');
  }
  
  public getPokemon(id: number) : Promise<any> {
    return this.get(`/pokemon/${id}`);
  }

  public getPokemons(limit: number) : Promise<any> {
    return this.get(`/pokemon?limit=${limit}`);
  }

  public static get Instance()
  {
    return this._instance || (this._instance = new this());
  }
}

export default PokemonApi;