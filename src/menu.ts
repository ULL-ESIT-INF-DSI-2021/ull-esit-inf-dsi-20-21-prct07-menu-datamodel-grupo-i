import {Plate} from "./plato";

export type menu=[x:Plate, y:Plate, z:Plate, ...dimensiones:Plate[]];
/**
 * Clase con la que representar el menu
 */
export class Menu {
  constructor(private readonly menus:menu) {
  }
  /**
   * Comprueba que el menu cumple con almenos 3 categorias diferentes
   * @returns Verdadero o falso si se cumple o no la condición
   */
  comprobarMenu(): boolean {
    let flagEntrante=false;
    let flagPrimerplato=false;
    let flagSegundoPlato=false;
    let flagPostre=false;
    let contador=0;
    // si el contador es 3 o mayor hay 3 categorias diferentes como minimo por
    // lo que es valido
    this.menus.forEach((plato) => {
      if (plato.getCategory()== "Entrante" && flagEntrante==false) {
        contador++;
        flagEntrante=true;
      }
      if (plato.getCategory()== "Primer plato" && flagPrimerplato==false) {
        flagPrimerplato=true;
        contador++;
      }
      if (plato.getCategory()== "Segundo Plato" && flagSegundoPlato==false) {
        flagSegundoPlato=true;
        contador++;
      }
      if (plato.getCategory()== "Postre" && flagPostre==false) {
        flagPostre=true;
        contador++;
      }
    });
    if (contador<3) {
      console.log("error");
      return false;
    } else {
      return true;
    }
  }
  /**
   * metodo para calcular la composicion total de los platos
   * que conforman el menu
   * @returns retorna la composicion total del menu
   */
  ComposicionNutricionalMenu() {
    let calorias=0;
    let proteinas= 0;
    let hidratos= 0;
    let lipidos= 0;
    let composicionTotal: number[] = [];
    for (let i = 0; i < this.menus.length; i++) {
      calorias+=this.menus[i].getComposition()[0];
      proteinas+= this.menus[i].getComposition()[1];
      hidratos+= this.menus[i].getComposition()[2];
      lipidos+= this.menus[i].getComposition()[3];
    }
    composicionTotal = [calorias, proteinas, hidratos, lipidos];
    return composicionTotal;
  }
  /**
   * metodo para retornar los grupos de alimentos predominantes de
   * cada plato que contiene el menu
   * @returns retorna la lista de grupo de alimentos
   */
  ListadoGruposAlimentos() {
    const listaGrupoAlimentos: string[] = [];
    for (let i = 0; i < this.menus.length; i++) {
      listaGrupoAlimentos.push(this.menus[i].getPredominant());
    }
    return listaGrupoAlimentos;
  }
  /**
   * metodo que retorna la suma del precio de cada
   * plato que compone el menu
   * @returns retorna el precio total del menu
   */
  PrecioTotal() {
    let precio = 0;
    for (let i = 0; i < this.menus.length; i++) {
      precio+=this.menus[i].getPrice();
    }
    return precio;
  }
  write() {
    for (let i = 0; i < this.menus.length; i++) {
      console.log('Plato Nº '+(i+1)+' es un '+this.menus[i].getCategory());
      console.table(this.menus[i].getFood());
    }
  }
}
