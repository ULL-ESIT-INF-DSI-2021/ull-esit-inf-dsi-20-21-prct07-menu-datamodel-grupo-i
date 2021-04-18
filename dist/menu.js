"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
/**
 * Clase con la que representar el menu
 */
class Menu {
    constructor(menus) {
        this.menus = menus;
    }
    /**
     * Comprueba que el menu cumple con almenos 3 categorias diferentes
     * @returns Verdadero o falso si se cumple o no la condición
     */
    comprobarMenu() {
        let flagEntrante = false;
        let flagPrimerplato = false;
        let flagSegundoPlato = false;
        let flagPostre = false;
        let contador = 0;
        // Si el contador es 3 o mayor hay 3 categorias diferentes como minimo por
        // lo que es valido
        this.menus.forEach((plato) => {
            if (plato.getCategory() == "Entrante" && flagEntrante == false) {
                contador++;
                flagEntrante = true;
            }
            if (plato.getCategory() == "Primer plato" && flagPrimerplato == false) {
                flagPrimerplato = true;
                contador++;
            }
            if (plato.getCategory() == "Segundo plato" && flagSegundoPlato == false) {
                flagSegundoPlato = true;
                contador++;
            }
            if (plato.getCategory() == "Postre" && flagPostre == false) {
                flagPostre = true;
                contador++;
            }
        });
        if (contador < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * Método para calcular la composicion total de los platos
     * que conforman el menu
     * @returns retorna la composicion total del menu
     */
    composicionNutricionalMenu() {
        let calorias = 0;
        let proteinas = 0;
        let hidratos = 0;
        let lipidos = 0;
        let composicionTotal = [];
        for (let i = 0; i < this.menus.length; i++) {
            calorias += this.menus[i].getComposition()[0];
            proteinas += this.menus[i].getComposition()[1];
            hidratos += this.menus[i].getComposition()[2];
            lipidos += this.menus[i].getComposition()[3];
        }
        composicionTotal = [calorias, proteinas, hidratos, lipidos];
        this.ComposicionTotal = composicionTotal;
        return composicionTotal;
    }
    /**
     * Método para retornar los grupos de alimentos predominantes de
     * cada plato que contiene el menu
     * @returns retorna la lista de grupo de alimentos
     */
    listadoGruposAlimentos() {
        const listaGrupoAlimentos = [];
        for (let i = 0; i < this.menus.length; i++) {
            listaGrupoAlimentos.push(this.menus[i].getPredominant());
        }
        return listaGrupoAlimentos;
    }
    /**
     * Método que retorna la suma del precio de cada
     * plato que compone el menu
     * @returns retorna el precio total del menu
     */
    precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.menus.length; i++) {
            precio += this.menus[i].getPrice();
        }
        return precio.toFixed(2);
    }
    getPlatos() {
        const aux = [];
        this.menus.forEach((platos) => {
            aux.push(platos);
        });
        return aux;
    }
    /**
     * Write para imprimir todos los platos de un menu, con
     * los ingredientes de cada uno
     */
    getInfo() {
        let aux = ``;
        aux += 'Precio Total: ' + this.precioTotal() +
            ', Calorías: ' + this.composicionNutricionalMenu()[0] +
            ', Lipidos: ' + this.composicionNutricionalMenu()[1] +
            ', Hidratos: ' + this.composicionNutricionalMenu()[2] +
            ', Proteinas: ' + this.composicionNutricionalMenu()[3] + '\n';
        for (let i = 0; i < this.menus.length; i++) {
            aux += this.menus[i].getInfo() + '\n';
        }
        return aux;
    }
    addPlato(plato) {
        this.menus.push(plato);
    }
}
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map