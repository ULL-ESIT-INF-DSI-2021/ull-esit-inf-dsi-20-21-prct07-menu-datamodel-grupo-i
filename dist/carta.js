"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
/**
 * Clase que representa una Carta respecto a una serie de munús prediseñados
 */
class Carta {
    constructor(menus, platos) {
        this.menus = menus;
        this.platos = platos;
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
exports.Carta = Carta;
//# sourceMappingURL=carta.js.map