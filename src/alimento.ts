/**
 * Clase con la que representamos los alimentos
 */
export class Food {
  /**
   * Constructor de la clase
   * @param name Nombre del alimento
   * @param locality Localización de origen
   * @param nutrients Composición nutricional del alimento
   * @param price Precio por kg en euros
   * @param group Grupo alimenticio al que pertenece
   */
  constructor(private readonly name: string,
    private readonly locality: string, private readonly nutrients: number[],
    private readonly price: number, private readonly group: string) {
  }
  /**
   * Getter de nombre
   * @returns nombre del alimento
   */
  public getName() : string {
    return this.name;
  }
  /**
   * Getter de localización
   * @returns localización de origen del alimento
   */
  public getLocal() : string {
    return this.locality;
  }
  /**
   * Getter de macronutrientes
   * @returns macronutrientes y calorías del alimento
   */
  public getNutrients() : number[] {
    return this.nutrients;
  }
  /**
   * Getter de precio
   * @returns precio en euros/kilo del alimento
   */
  public getPrice() : number {
    return this.price;
  }
  /**
   * Getter de grupo
   * @returns grupo alimenticio
   */
  public getGroup() : string {
    return this.group;
  }
}
