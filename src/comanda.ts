import {Plate} from "./plato";
import {Menu} from "./menu";
import {Carta} from "./carta";

export class Comanda {
  constructor(private pedido: Menu | Plate[], pivate readonly carta:Carta) {
  }

  getPedido(): Menu | Plate[] {
    return this.pedido;
  }
  setPedido(orden: Menu | Plate[]) {
    this.pedido = orden;
  }
  writeMenu() {
    this.
  }
}
