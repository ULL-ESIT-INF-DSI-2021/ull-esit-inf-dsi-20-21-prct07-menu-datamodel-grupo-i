
import {Plate} from "./plato";
import {Menu} from "./menu";

export class Comanda {
  constructor(private pedido: Menu | Plate[]) {
  }

  getPedido(): Menu | Plate[] {
    return this.pedido;
  }
  setPedido(orden: Menu | Plate[]) {
    this.pedido = orden;
  }
}
