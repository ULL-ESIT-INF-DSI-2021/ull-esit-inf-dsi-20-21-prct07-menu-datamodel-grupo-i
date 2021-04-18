import { Menu } from "./menu";
import { Plate } from "./plato";
/**
 * Clase que representa una Carta respecto a una serie de munús prediseñados
 */
export declare class Carta {
    menus: Menu[];
    platos: Plate[];
    /**
     * Constructor de la clase
     * @param menus Menus de la carta
     * @param platos Platos de la carta
     */
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
    /**
     * Nos proporciona una visualización mas clara de
     * los platos y menus de la carta
     */
    getInfoMenu(): void;
    getInfoPlato(): void;
}
