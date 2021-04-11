/**
 * Diferentes grupos a los que puede pertenecer un alimento
 */
declare type Grupo = "Grupo1" | "Grupo2" | "Grupo3" | "Grupo4" | "Grupo5";
/**
 * Clase con la que representamos los alimentos
 */
export declare class Food {
    private readonly name;
    private readonly locality;
    private readonly nutrients;
    private readonly price;
    private readonly group;
    /**
     * Constructor de la clase
     * @param name Nombre del alimento
     * @param locality Localización de origen
     * @param nutrients Composición nutricional del alimento
     * @param price Precio por kg en euros
     * @param group Grupo alimenticio al que pertenece
     */
    constructor(name: string, locality: string, nutrients: number[], price: number, group: Grupo);
    /**
     * Getter de nombre
     * @returns nombre del alimento
     */
    getName(): string;
    /**
     * Getter de localización
     * @returns localización de origen del alimento
     */
    getLocal(): string;
    /**
     * Getter de macronutrientes
     * @returns macronutrientes y calorías del alimento
     */
    getNutrients(): number[];
    /**
     * Getter de precio
     * @returns precio en euros/kilo del alimento
     */
    getPrice(): number;
    /**
     * Getter de grupo
     * @returns grupo alimenticio
     */
    getGroup(): Grupo;
}
export {};
