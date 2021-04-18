import { Food } from "./alimento";
/**
 * Distintas categorías que puede tener un plato
 */
declare type Categoria = "Entrante" | "Primer plato" | "Segundo plato" | "Postre";
export declare class Plate {
    private readonly nombre;
    private readonly category;
    private readonly foods;
    private readonly amount;
    private TotalComposition;
    private TotalPrice;
    private Predominante;
    /**
     * Constructor de la clase
     * @param category La categoria del plato
     * @param foods Lista de alimentos que componen el plato
     * @param amount Cantidad de cada alimento del plato
     */
    constructor(nombre: string, category: Categoria, foods: Food[], amount: number[]);
    /**
     * Composición nutricional del plato. Suma la composición nutricional
     * de los alimentos
     */
    private composition;
    /**
     * Nos permite determinar el grupo de alimento predominante del plato
     */
    private foodPredominante;
    /**
     * Sumamos el precio de los alimentos, para determinar el precio del plato.
     */
    private addPrice;
    /**
     * getter de la categoria del plato
     * @returns retorna la categoría del plato
     */
    getCategory(): Categoria;
    /**
     * getter de la categoria del plato
     * @returns retorna la categoría del plato
     */
    getFood(): Food[];
    /**
   * Obtenemos la suma de los precios de todos lo alimentos de los que se
   * compone el plato
   * @returns Precio del plato
   */
    getPrice(): number;
    /**
     * Obtenemos la composición nutricional del plato
     * @returns Composición nutricional del plato
     */
    getComposition(): number[];
    /**
     * Obtenemos el nombre del plato
     * @returns Nombre del plato
     */
    getNombre(): string;
    /**
     * Obtenemos el grupo predominante de alimentos que componen el plato
     * @returns El nombre del grupo predominante
     */
    getPredominant(): string;
    /**
     * Obtenemos la información del plato de manera clara.
     * @returns La información del plato.
     */
    getInfo(): string;
}
export {};
