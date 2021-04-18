import { Plate } from "./plato";
import { Menu } from "./menu";
/**
 * Clase para simular una Comanda
 */
export declare class Comanda {
    private comandaMenu;
    private comandaPlato;
    /**
     * Constructor de la clase
     * @param carta1 Carta de la comanda
     */
    constructor(comandaMenu: Menu[], comandaPlato: Plate[]);
    /**
     * Con este metodo mostramos las opciones iniciales Menu, Plato Individual o Menu personalizado.
     */
    Preguntar(): void;
    selectPrincipal(): void;
    /**
     * Mostrará el pedido que solicita el usuario
     */
    showPedido(): void;
    /**
     * Mostramos las opciones al seleccionar __selectPlato__ y además se puede seleccionar el plato que se agrega a la carta.
     */
    selectPlato(): void;
    /**
     * Mostramos las opciones al seleccionar __selectMenu__ y además se puede seleccionar el Menú que se agrega a la carta.
     */
    selectMenu(): void;
    /**
     * Seleccionamos el menú personalizado
     */
    selectPersonalizado(): void;
    /**
     * Se puede seleccionar el menú que se desea
     */
    promptOpcion(): void;
}
