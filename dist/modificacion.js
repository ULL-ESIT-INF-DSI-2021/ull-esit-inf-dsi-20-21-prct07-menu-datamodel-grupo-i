"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivReduce = exports.ProdReduce = exports.SubReduce = exports.AddReduce = exports.OperacionReduce = void 0;
/**
 * Clase abstracta para la operacion Reduce
 */
class OperacionReduce {
    constructor(array) {
        this.array = array;
    }
    run() {
    }
}
exports.OperacionReduce = OperacionReduce;
/**
 * Clase hija de OperacionReduce que hara la suma
 */
class AddReduce extends OperacionReduce {
    constructor(array) {
        super(array);
        this.array = array;
        this.array.forEach((element) => {
            this.acumulador += element;
        });
    }
    /**
     * Hace la suma del array
     * @returns la suma total del array
     */
    OperaReduce() {
        return this.acumulador;
    }
    reduceAdd() {
        return this.acumulador;
    }
}
exports.AddReduce = AddReduce;
/**
 * Clase hija de OperacionReduce que hara la resta
 */
class SubReduce extends OperacionReduce {
    constructor(array) {
        super(array);
        this.array = array;
    }
    /**
     * Hace la resta del array
     * @returns la resta total del array
     */
    OperaReduce() {
        this.array.forEach((element) => {
            this.acumulador -= element;
        });
        return this.acumulador;
    }
}
exports.SubReduce = SubReduce;
/**
 * Clase hija de OperacionReduce que hara el producto
 */
class ProdReduce extends OperacionReduce {
    constructor(array) {
        super(array);
        this.array = array;
    }
    /**
     * Hace el producto de los elementos del array
     * @returns el producto total del array
     */
    OperaReduce() {
        this.array.forEach((element) => {
            this.acumulador *= element;
        });
        return this.acumulador;
    }
}
exports.ProdReduce = ProdReduce;
/**
 * Clase hija de OperacionReduce que hara la división
 */
class DivReduce extends OperacionReduce {
    constructor(array) {
        super(array);
        this.array = array;
    }
    /**
     * Hace la division del array
     * @returns la division total del array
     */
    OperaReduce() {
        this.array.forEach((element) => {
            this.acumulador /= element;
        });
        return this.acumulador;
    }
}
exports.DivReduce = DivReduce;
//# sourceMappingURL=modificacion.js.map