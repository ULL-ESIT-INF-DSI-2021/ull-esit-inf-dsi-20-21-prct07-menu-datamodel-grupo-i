"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
/**
 * Clase con la que representamos los alimentos
 */
class Food {
    /**
     * Constructor de la clase
     * @param name Nombre del alimento
     * @param locality Localización de origen
     * @param nutrients Composición nutricional del alimento
     * @param price Precio por kg en euros
     * @param group Grupo alimenticio al que pertenece
     */
    constructor(name, locality, nutrients, price, group) {
        this.name = name;
        this.locality = locality;
        this.nutrients = nutrients;
        this.price = price;
        this.group = group;
    }
    /**
     * Getter de nombre
     * @returns nombre del alimento
     */
    getName() {
        return this.name;
    }
    /**
     * Getter de localización
     * @returns localización de origen del alimento
     */
    getLocal() {
        return this.locality;
    }
    /**
     * Getter de macronutrientes
     * @returns macronutrientes y calorías del alimento
     */
    getNutrients() {
        return this.nutrients;
    }
    /**
     * Getter de precio
     * @returns precio en euros/kilo del alimento
     */
    getPrice() {
        return this.price;
    }
    /**
     * Getter de grupo
     * @returns grupo alimenticio
     */
    getGroup() {
        return this.group;
    }
    getInfo() {
        return `Nombre: ${this.name},` + ` Origen: ${this.locality},` +
            ` Precio: ${this.price} €/kg,` + ` ${this.group},` +
            ` Nutrientes (100 g):\n` +
            ` Calorías: ${this.nutrients[0]},` +
            ` Lipidos: ${this.nutrients[1]},` +
            ` Hidratos: ${this.nutrients[2]},` +
            ` Proteinas: ${this.nutrients[3]}`;
    }
}
exports.Food = Food;
//# sourceMappingURL=alimento.js.map