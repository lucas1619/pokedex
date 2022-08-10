import { Vec3 } from "node-vibrant/lib/color";
import { BaseStats } from "./BaseStats";


export interface Pokemon {
    image: string | undefined;
    name: string;
    number: number;
    height: number | null | undefined;
    types: string[] | null | undefined;
    baseStats: BaseStats | null | undefined;
    backgroundColor?: Vec3 | undefined;
}
