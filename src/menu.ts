import {plate} from "./plato";
type menu=[x:plate, y:plate, z:plate, ...dimensiones:plate[]];
/**
 * Clase con la que representar el menu
 */
 export class Menu {
  constructor(private readonly menus:menu) {  
  }
  /**
   * metodo para comprobar si el menu es valido
   */
  comprobarMenu() {
    let flagEntrante=false;
    let flagPrimerplato=false;
    let flagSegundoPlato=false;
    let flagPostre=false;
    let contador=0;
    //si el contador es 3 o mayor hay 3 categorias diferentes como minimo por
    //lo que es valido
    this.menus.forEach(plato => {
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
    }
  }
  /**
   * metodo para calcular la composicion total de los platos
   * que conforman el menu
   * @returns retorna la composicion total del menu
   */
  ComposicioNutricionalMenu() {
    let calorias=0;
    let proteinas= 0;
    let hidratos= 0;
    let lipidos= 0;
    let composicionTotal:number[];
    for (let i = 0; i < this.menus.length; i++) {
      calorias+=this.menus[i].composition()[0];
      proteinas+= this.menus[i].composition()[1];
      hidratos+= this.menus[i].composition()[2];
      lipidos+= this.menus[i].composition()[3];       
    }
    return composicionTotal=[calorias, proteinas, hidratos,lipidos];
  }
  /**
   * metodo para retornar los grupos de alimentos predominantes de 
   * cada plato que contiene el menu
   * @returns retorna la lista de grupo de alimentos
   */
  ListadoGruposAlimentos() {
    let listaGrupoAlimentos:string[]=[];
    for (let i = 0; i < this.menus.length; i++) {
      listaGrupoAlimentos.push(this.menus[i].foodPredominante());
    }  
    return listaGrupoAlimentos;
  }
  /**
   * metodo que retorna la suma del precio de cada
   * plato que compone el menu
   * @returns retorna el precio total del menu
   */
  PrecioTotal() {
    let precio=0;
    for (let i = 0; i < this.menus.length; i++) {
      precio+=this.menus[i].TotalPrice;
    }  
    return precio;
  }
}