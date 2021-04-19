/**
 * Clase abstracta para la operacion Reduce
 */
export declare abstract class OperacionReduce {
    protected array: number[];
    protected acumulador: number;
    constructor(array: number[]);
    run(): void;
    /**
     * Operaciones de Reduce en las subclases
     */
    protected abstract OperaReduce(): number;
}
/**
 * Clase hija de OperacionReduce que hara la suma
 */
export declare class AddReduce extends OperacionReduce {
    protected array: number[];
    constructor(array: number[]);
    /**
     * Hace la suma del array
     * @returns la suma total del array
     */
    protected OperaReduce(): number;
    reduceAdd(): number;
}
/**
 * Clase hija de OperacionReduce que hara la resta
 */
export declare class SubReduce extends OperacionReduce {
    protected array: number[];
    constructor(array: number[]);
    /**
     * Hace la resta del array
     * @returns la resta total del array
     */
    protected OperaReduce(): number;
}
/**
 * Clase hija de OperacionReduce que hara el producto
 */
export declare class ProdReduce extends OperacionReduce {
    protected array: number[];
    constructor(array: number[]);
    /**
     * Hace el producto de los elementos del array
     * @returns el producto total del array
     */
    protected OperaReduce(): number;
}
/**
 * Clase hija de OperacionReduce que hara la división
 */
export declare class DivReduce extends OperacionReduce {
    protected array: number[];
    constructor(array: number[]);
    /**
     * Hace la division del array
     * @returns la division total del array
     */
    protected OperaReduce(): number;
}
