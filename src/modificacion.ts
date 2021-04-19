

/**
 * Clase abstracta para la operacion Reduce
 */
export abstract class OperacionReduce {
  protected acumulador: number;
  constructor(protected array: number[]) { }

  public run() {
    
  }

  /**
   * Operaciones de Reduce en las subclases
   */
  protected abstract OperaReduce(): number;
}
/**
 * Clase hija de OperacionReduce que hara la suma
 */
export class AddReduce extends OperacionReduce {
  constructor(protected array: number[]) {
    super(array);
    this.array.forEach((element) => {
      this.acumulador += element;
    });
  }
  /**
   * Hace la suma del array
   * @returns la suma total del array
   */
  protected OperaReduce(): number {
    return this.acumulador;
  }

  public reduceAdd():number {
    return this.acumulador;
  }
}
/**
 * Clase hija de OperacionReduce que hara la resta
 */
export class SubReduce extends OperacionReduce {
  constructor(protected array: number[]) {
    super(array);
  }
  /**
   * Hace la resta del array
   * @returns la resta total del array
   */
  protected OperaReduce(): number {
    this.array.forEach((element) => {
      this.acumulador -= element;
    });
    return this.acumulador;
  }
}

/**
 * Clase hija de OperacionReduce que hara el producto
 */
export class ProdReduce extends OperacionReduce {
  constructor(protected array: number[]) {
    super(array);
  }
  /**
   * Hace el producto de los elementos del array
   * @returns el producto total del array
   */
  protected OperaReduce(): number {
    this.array.forEach((element) => {
      this.acumulador *= element;
    });
    return this.acumulador;
  }
}

/**
 * Clase hija de OperacionReduce que hara la división
 */
export class DivReduce extends OperacionReduce {
  constructor(protected array: number[]) {
    super(array);
  }
  /**
   * Hace la division del array
   * @returns la division total del array
   */
  protected OperaReduce(): number {
    this.array.forEach((element) => {
      this.acumulador /= element;
    });
    return this.acumulador;
  }
}
