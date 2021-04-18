/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {Plate} from "./plato";
import {Menu, menu} from "./menu";
import {Carta} from "./carta";
import * as Menuu from "./database/menus";
import * as Dish from "./database/dishes";

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./src/database/base.json');
const db = low(adapter);

/**
 * Este enum permite seleccionar entre los Menús predefinidos o Platos individuales.
 */
enum Seleccionar {
  Carta = "Menus predefinidos",
  Plato = "Platos individuales"
}

/**
 * Este enum permite seleccionar entre Menu, Plato Individual o Menu personalizado.
 */
enum Principal {
  Menu = "Menu",
  Plato = "Plato Individual",
  MenuP = "Menu Personalizado"
}

/**
 * Opciones para decidir.
 */
enum Opciones {
  Si = "Sí",
  No = "No"
}

/**
 * Seleccionamos el menu que se quiere usar.
 */
enum SeleccionarMenu {
  Menu1="Menu 1",
  Menu2="Menu 2",
  Menu3="Menu 3",
  Menu4="Menu 4",
  Menu5="Menu 5",
  CrearMenu="Crear Menu",
  Back="Back"
}

/**
 * Carta prediseñada con todos los menus y platos
 */
const carta = new Carta([Menuu.Menu1, Menuu.Menu2, Menuu.Menu3,
  Menuu.Menu4, Menuu.Menu5],
[Dish.CremaCalabacin, Dish.QuesoAsadoSetas, Dish.PanConTomate, Dish.PanConQueso, Dish.TartarSalmonAguacate, Dish.AguacatesRellenos,
  Dish.LentejasCompuestas, Dish.Ensalada, Dish.GarbanzosCompuestos, Dish.EnsaladaDePasta, Dish.CremaCalabacin,
  Dish.PastaConAtun, Dish.PolloNaranja, Dish.ChuletasZT, Dish.TerneraEncebollado, Dish.ConejoPapas,
  Dish.MousseCasa, Dish.HeladoPlatano, Dish.YogurFresasLimon, Dish.FlanHuevoHelado, Dish.HeladoCasa]);

  /**
   * Clase para simular una Comanda
   */
export class Comanda {
  /**
   * Constructor de la clase
   * @param carta1 Carta de la comanda
   */
  constructor(private comandaMenu: Menu[], private comandaPlato: Plate[]) {
  }

  /**
   * Con este metodo mostramos las opciones iniciales Menu, Plato Individual o Menu personalizado.
   */
  Preguntar():void {
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
  selectPrincipal(): void {
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
  selectPlato(): void {
    console.clear();
    carta.getPlatos().forEach((element) => {
      console.log(element.getInfo() + '\n');
    });
    let check: boolean;
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
      } else {
        console.log(`No se encontró el plato`);
      }
    });
  }

  /**
   * Mostramos las opciones al seleccionar __selectMenu__ y además se puede seleccionar el Menú que se agrega a la carta.
   */
  selectMenu(): void {
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
  selectPersonalizado(): void {
    console.clear();
    carta.getPlatos().forEach((plato) => {
      console.log(plato.getNombre());
    });
    let flagParada: boolean = false;
    let flagpromt=0;
    const comanda: Plate[] = [];
    if (flagpromt ==0) {
      inquirer.prompt({type: "input", name: "plato", message: "Seleccione un plato para su menu:"})
          .then((answers) => {
            carta.getPlatos().forEach((plate) => {
              if (plate.getNombre() == answers["plato"]) {
                comanda.push(plate);
                console.log("Plato añadido al menu");
                flagParada=true;
              }
            });
            if (flagParada==false) {
              console.log("Plato no encontrado");
            }
          });
      comanda.forEach((element) => {
        this.comandaMenu[0].addPlato(element);
      });
      flagpromt=1;
    } else if (flagpromt==1) {
      console.log("nada");
    }
  }

  /**
   * Se puede seleccionar el menú que se desea
   */
  promptOpcion(): void {
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

  /*guardarPersonalizado(guardar: Menu): void {
    db.defaults({carta});
    guardar.getPlatos().forEach((elemento) => {
      db.get("Menus")
          .push({nombre: elemento.getNombre(), categoria: elemento.getCategory()})
          .write();
    });
  }*/
}

/**
 * Objeto para invocar la clase Comanda
 */
let Platos: Plate[] = [];
let Menus: Menu[] = [];
const comanda1: Comanda = new Comanda(Menus, Platos);
comanda1.selectPrincipal();