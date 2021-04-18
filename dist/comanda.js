"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comanda = void 0;
/* eslint-disable max-len */
const inquirer = __importStar(require("inquirer"));
const carta_1 = require("./carta");
const Menuu = __importStar(require("./database/menus"));
const Dish = __importStar(require("./database/dishes"));
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./src/database/base.json');
const db = low(adapter);
/**
 * Este enum permite seleccionar entre los Menús predefinidos o Platos individuales.
 */
var Seleccionar;
(function (Seleccionar) {
    Seleccionar["Carta"] = "Menus predefinidos";
    Seleccionar["Plato"] = "Platos individuales";
})(Seleccionar || (Seleccionar = {}));
/**
 * Este enum permite seleccionar entre Menu, Plato Individual o Menu personalizado.
 */
var Principal;
(function (Principal) {
    Principal["Menu"] = "Menu";
    Principal["Plato"] = "Plato Individual";
    Principal["MenuP"] = "Menu Personalizado";
})(Principal || (Principal = {}));
/**
 * Opciones para decidir.
 */
var Opciones;
(function (Opciones) {
    Opciones["Si"] = "S\u00ED";
    Opciones["No"] = "No";
})(Opciones || (Opciones = {}));
/**
 * Seleccionamos el menu que se quiere usar.
 */
var SeleccionarMenu;
(function (SeleccionarMenu) {
    SeleccionarMenu["Menu1"] = "Menu 1";
    SeleccionarMenu["Menu2"] = "Menu 2";
    SeleccionarMenu["Menu3"] = "Menu 3";
    SeleccionarMenu["Menu4"] = "Menu 4";
    SeleccionarMenu["Menu5"] = "Menu 5";
    SeleccionarMenu["CrearMenu"] = "Crear Menu";
    SeleccionarMenu["Back"] = "Back";
})(SeleccionarMenu || (SeleccionarMenu = {}));
/**
 * Carta prediseñada con todos los menus y platos
 */
const carta = new carta_1.Carta([Menuu.Menu1, Menuu.Menu2, Menuu.Menu3,
    Menuu.Menu4, Menuu.Menu5], [Dish.CremaCalabacin, Dish.QuesoAsadoSetas, Dish.PanConTomate, Dish.PanConQueso, Dish.TartarSalmonAguacate, Dish.AguacatesRellenos,
    Dish.LentejasCompuestas, Dish.Ensalada, Dish.GarbanzosCompuestos, Dish.EnsaladaDePasta, Dish.CremaCalabacin,
    Dish.PastaConAtun, Dish.PolloNaranja, Dish.ChuletasZT, Dish.TerneraEncebollado, Dish.ConejoPapas,
    Dish.MousseCasa, Dish.HeladoPlatano, Dish.YogurFresasLimon, Dish.FlanHuevoHelado, Dish.HeladoCasa]);
/**
 * Clase para simular una Comanda
 */
class Comanda {
    /**
     * Constructor de la clase
     * @param carta1 Carta de la comanda
     */
    constructor(comandaMenu, comandaPlato) {
        this.comandaMenu = comandaMenu;
        this.comandaPlato = comandaPlato;
    }
    /**
     * Con este metodo mostramos las opciones iniciales Menu, Plato Individual o Menu personalizado.
     */
    Preguntar() {
        inquirer.prompt({
            type: "list",
            name: "Opciones",
            message: "¿Quiere añadir otro plato a tu menú?",
            choices: Object.values(Opciones)
        }).then((answers) => {
            switch (answers["Opciones"]) {
                case Opciones.Si:
                    this.selectPersonalizado();
                    break;
                case Opciones.No:
                    this.selectPrincipal();
                    break;
            }
        });
    }
    selectPrincipal() {
        console.clear();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Choose option",
            choices: Object.values(Principal)
        }).then((answers) => {
            switch (answers["command"]) {
                case Principal.Menu:
                    this.selectMenu();
                    break;
                case Principal.Plato:
                    this.selectPlato();
                    break;
                case Principal.MenuP:
                    this.selectPersonalizado();
                    //this.guardarPersonalizado(this.comandaMenu[0]);
                    break;
            }
        });
    }
    /**
     * Mostrará el pedido que solicita el usuario
     */
    showPedido() {
        console.log('Su pedido es:');
        this.comandaMenu.forEach((menu) => {
            menu.getInfo();
        });
        this.comandaPlato.forEach((plato) => {
            plato.getInfo();
        });
    }
    /**
     * Mostramos las opciones al seleccionar __selectPlato__ y además se puede seleccionar el plato que se agrega a la carta.
     */
    selectPlato() {
        console.clear();
        carta.getPlatos().forEach((element) => {
            console.log(element.getInfo() + '\n');
        });
        let check;
        inquirer.prompt({
            type: "input",
            name: "command",
            message: "Selecciona una plato: ",
        }).then((answers) => {
            carta.getPlatos().forEach((element) => {
                if (element.getNombre() == answers["command"]) {
                    this.comandaPlato.push(element);
                    check = true;
                }
            });
            if (check) {
                console.log('Plato añadido');
            }
            else {
                console.log(`No se encontró el plato`);
            }
        });
    }
    /**
     * Mostramos las opciones al seleccionar __selectMenu__ y además se puede seleccionar el Menú que se agrega a la carta.
     */
    selectMenu() {
        console.clear();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Choose option",
            choices: Object.values(SeleccionarMenu)
        }).then((answers) => {
            switch (answers["command"]) {
                case SeleccionarMenu.Menu1:
                    console.log(carta.getMenus()[0].getInfo());
                    this.promptOpcion();
                    this.comandaMenu.push(carta.getMenus()[0]);
                    // this.guardarPersonalizado(carta.getMenus()[0]);
                    break;
                case SeleccionarMenu.Menu2:
                    console.log(carta.getMenus()[1].getInfo());
                    this.promptOpcion();
                    this.comandaMenu.push(carta.getMenus()[1]);
                    // this.guardarPersonalizado(carta.getMenus()[1]);
                    break;
                case SeleccionarMenu.Menu3:
                    console.log(carta.getMenus()[2].getInfo());
                    this.promptOpcion();
                    this.comandaMenu.push(carta.getMenus()[2]);
                    // this.guardarPersonalizado(carta.getMenus()[2]);
                    break;
                case SeleccionarMenu.Menu4:
                    console.log(carta.getMenus()[3].getInfo());
                    this.promptOpcion();
                    this.comandaMenu.push(carta.getMenus()[3]);
                    // this.guardarPersonalizado(carta.getMenus()[3]);
                    break;
                case SeleccionarMenu.Menu5:
                    console.log(carta.getMenus()[4].getInfo());
                    this.promptOpcion();
                    this.comandaMenu.push(carta.getMenus()[4]);
                    // this.guardarPersonalizado(carta.getMenus()[4]);
                    break;
                case SeleccionarMenu.Back:
                    this.selectPrincipal();
                    break;
            }
        });
        this.showPedido();
    }
    /**
     * Seleccionamos el menú personalizado
     */
    selectPersonalizado() {
        console.clear();
        carta.getPlatos().forEach((plato) => {
            console.log(plato.getNombre());
        });
        let flagParada = false;
        let flagpromt = 0;
        const comanda = [];
        if (flagpromt == 0) {
            inquirer.prompt({ type: "input", name: "plato", message: "Seleccione un plato para su menu:" })
                .then((answers) => {
                carta.getPlatos().forEach((plate) => {
                    if (plate.getNombre() == answers["plato"]) {
                        comanda.push(plate);
                        console.log("Plato añadido al menu");
                        flagParada = true;
                    }
                });
                if (flagParada == false) {
                    console.log("Plato no encontrado");
                }
            });
            comanda.forEach((element) => {
                this.comandaMenu[0].addPlato(element);
            });
            flagpromt = 1;
        }
        else if (flagpromt == 1) {
            console.log("nada");
        }
    }
    /**
     * Se puede seleccionar el menú que se desea
     */
    promptOpcion() {
        inquirer.prompt({
            type: "list",
            name: "Opciones",
            message: "¿Quiere seleccionar este menú?",
            choices: Object.values(Opciones)
        }).then((answers) => {
            switch (answers["Opciones"]) {
                case Opciones.Si:
                    console.log("Has seleccionado el menú");
                    break;
                case Opciones.No:
                    this.selectMenu();
                    break;
            }
        });
    }
}
exports.Comanda = Comanda;
/**
 * Objeto para invocar la clase Comanda
 */
let Platos = [];
let Menus = [];
const comanda1 = new Comanda(Menus, Platos);
comanda1.selectPrincipal();
//# sourceMappingURL=comanda.js.map