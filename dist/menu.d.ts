import { Plate } from "./plato";
/**
 * Lista con al menos tres platos
 */
export declare type menu = [x: Plate, y: Plate, z: Plate, ...dimensiones: Plate[]];
/**
 * Clase con la que representar el menu
 */
export declare class Menu {
    private readonly menus;
    /**
     * @param menus Lista de platos (minimmo 3 platos por menu)
     */
    private ComposicionTotal;
    constructor(menus: menu);
    /**
     * Comprueba que el menu cumple con almenos 3 categorias diferentes
     * @returns Verdadero o falso si se cumple o no la condición
     */
    comprobarMenu(): boolean;
    /**
     * Método para calcular la composicion total de los platos
     * que conforman el menu
     * @returns retorna la composicion total del menu
     */
    composicionNutricionalMenu(): number[];
    /**
     * Método para retornar los grupos de alimentos predominantes de
     * cada plato que contiene el menu
     * @returns retorna la lista de grupo de alimentos
     */
    listadoGruposAlimentos(): string[];
    /**
     * Método que retorna la suma del precio de cada
     * plato que compone el menu
     * @returns retorna el precio total del menu
     */
    precioTotal(): string;
    getPlatos(): Plate[];
    /**
     * Write para imprimir todos los platos de un menu, con
     * los ingredientes de cada uno
     */
    getInfo(): string;
    addPlato(plato: Plate): void;
}
