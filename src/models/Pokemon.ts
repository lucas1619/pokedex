import { BaseStats } from "./BaseStats";


export interface Pokemon {
    image: string | undefined;
    name: string;
    number: number;
    height: number | null | undefined;
    types: string[] | null | undefined;
    baseStats: BaseStats | null | undefined;
}
