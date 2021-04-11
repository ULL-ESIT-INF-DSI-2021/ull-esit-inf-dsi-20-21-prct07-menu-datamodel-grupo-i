import {Menu} from "./menu";
import {Plate} from "./plato";
/**
 * Clase que representa una Carta respecto a una serie de munús prediseñados
 */
export class Carta {
  constructor(public menus:Menu[], private readonly platos:Plate[]) {
  }
  /**
   * getter de los menus que contiene la carta
   * @returns Menus de la carta
   */
  getMenus() {
    return this.menus;
  }
  /**
   * getter de platos con los que se pueden hacer
   * menus prsonalizados
   * @returns Platos de la carta
   */
  getPlatos() {
    return this.platos;
  }
}
