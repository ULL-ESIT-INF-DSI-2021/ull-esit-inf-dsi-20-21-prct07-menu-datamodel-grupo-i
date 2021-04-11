import { Menu } from "./menu";
import { Plate } from "./plato";
/**
 * Clase que representa una Carta respecto a una serie de munús prediseñados
 */
export declare class Carta {
    menus: Menu[];
    private readonly platos;
    constructor(menus: Menu[], platos: Plate[]);
    /**
     * getter de los menus que contiene la carta
     * @returns Menus de la carta
     */
    getMenus(): Menu[];
    /**
     * getter de platos con los que se pueden hacer
     * menus prsonalizados
     * @returns Platos de la carta
     */
    getPlatos(): Plate[];
}
