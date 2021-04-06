import {Food} from "./alimento";

type Categoria = "Entrante" | "Primer plato" | "Segundo Plato" | "Postre";

export class plate {
  TotalComposition: number[];
  TotalPrice: number;
  Predominante: string;
  constructor(private readonly category: Categoria,
    private readonly foods: Food[],
    private readonly amount: number[]) { }

  composition() {
    let calorias: number = 0;
    let proteinas: number = 0;
    let hidratos: number = 0;
    let lipidos: number = 0;
    for (let i = 0; i < this.foods.length; i++) {
      calorias += this.foods[i].getNutrients()[0] * this.amount[i] / 100;
      proteinas += this.foods[i].getNutrients()[1] * this.amount[i] / 100;
      hidratos += this.foods[i].getNutrients()[2] * this.amount[i] / 100;
      lipidos += this.foods[i].getNutrients()[3] * this.amount[i] / 100;
    }
    this.TotalComposition = [calorias, proteinas, hidratos, lipidos];
    return this.TotalComposition;
  }

  /**
   * foodPredominante
   */
  public foodPredominante() {
    let g1: number = 0;
    let g2: number = 0;
    let g3: number = 0;
    let g4: number = 0;
    let g5: number = 0;
    for (let i = 0; i < this.foods.length; i++) {
      switch (this.foods[i].getGroup()) {
        case 'grupo1':
          g1++;
          break;
        case 'grupo2':
          g2++;
          break;
        case 'grupo3':
          g3++;
          break;
        case 'grupo4':
          g4++;
          break;
        case 'grupo5':
          g5++;
          break;
        default:
          break;
      }
    }
    if (g1 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo1";
    } else if (g2 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo2";
    } else if (g3 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo1";
    } else if (g4 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo4";
    } else if (g5 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo5";
    }
    return this.Predominante;
  }

  addPrice() {
    let acumulador: number = 0;
    for (let i = 0; i < this.foods.length; i++) {
      acumulador += this.foods[i].getPrice() * this.amount[i] / 100;
    }
    this.TotalPrice = acumulador;
  }
  /**
   * getter de la categoria del plato
   * @returns retorna la categoría del plato
   */
  getCategory() {
    return this.category;
  }
}
