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
exports.HeladoCasa = exports.FlanHuevoHelado = exports.YogurFresasLimon = exports.HeladoPlatano = exports.MousseCasa = exports.ConejoPapas = exports.TerneraEncebollado = exports.ChuletasZT = exports.PolloNaranja = exports.PastaConAtun = exports.CremaCalabacin = exports.EnsaladaDePasta = exports.GarbanzosCompuestos = exports.Ensalada = exports.LentejasCompuestas = exports.AguacatesRellenos = exports.TartarSalmonAguacate = exports.PanConQueso = exports.PanConTomate = exports.QuesoAsadoSetas = void 0;
/* eslint-disable max-len */
const plato_1 = require("../plato");
const Alimento = __importStar(require("./aliments"));
// Entrantes
exports.QuesoAsadoSetas = new plato_1.Plate('Queso Asado con Setas', 'Entrante', [Alimento.QuesoBurgos, Alimento.QuesoGouda, Alimento.Setas], [75, 75, 35]);
exports.PanConTomate = new plato_1.Plate('Pan con tomate', 'Entrante', [Alimento.PanTostado, Alimento.PanBlanco, Alimento.Tomate], [50, 50, 29]);
exports.PanConQueso = new plato_1.Plate('Pan con varios quesos', 'Entrante', [Alimento.PanTostado, Alimento.QuesoBurgos, Alimento.QuesoGouda], [95, 55, 55]);
exports.TartarSalmonAguacate = new plato_1.Plate('Tartar de salmon y aguacate', 'Entrante', [Alimento.Salmon, Alimento.Aguacate], [50, 35]);
exports.AguacatesRellenos = new plato_1.Plate('Aguactes rellenos con nueces y queso burgos', 'Entrante', [Alimento.Aguacate, Alimento.NuecesConCascara, Alimento.QuesoBurgos], [100, 30, 55]);
// Primer Plate
exports.LentejasCompuestas = new plato_1.Plate('Lentejas compuestas', 'Primer plato', [Alimento.Lentejas, Alimento.HuevoGallina, Alimento.Cebolla, Alimento.Platano], [200, 20, 33, 50]);
exports.Ensalada = new plato_1.Plate('Ensalada', 'Primer plato', [Alimento.Tomate, Alimento.Lechuga, Alimento.Cebolla], [200, 120, 100]);
exports.GarbanzosCompuestos = new plato_1.Plate('Garanzos compuestos', 'Primer plato', [Alimento.Garbanzos, Alimento.PimientoRojo, Alimento.HuevoGallina], [250, 95, 120]);
exports.EnsaladaDePasta = new plato_1.Plate('Ensalada de pasta', 'Primer plato', [Alimento.Pasta, Alimento.Ajo, Alimento.Cebolla, Alimento.Zanahoria], [200, 50, 50, 33]);
exports.CremaCalabacin = new plato_1.Plate('Crema de calabacin', 'Primer plato', [Alimento.Calabacin, Alimento.Puerro, Alimento.Champinion], [120, 20, 35]);
// Segundo plato
exports.PastaConAtun = new plato_1.Plate('Pasta con Atún', 'Segundo plato', [Alimento.Pasta, Alimento.Atun], [150, 20]);
exports.PolloNaranja = new plato_1.Plate('Pollo a la naranja', 'Segundo plato', [Alimento.Pollo, Alimento.Naranja], [200, 20]);
exports.ChuletasZT = new plato_1.Plate('Chuletas de cerdo con zanahorias y tomate', 'Segundo plato', [Alimento.CerdoChuleta, Alimento.Zanahoria, Alimento.Tomate], [250, 30, 30]);
exports.TerneraEncebollado = new plato_1.Plate('Chuleta de ternera encebollada', 'Segundo plato', [Alimento.TerneraChuleta, Alimento.Cebolla], [200, 40]);
exports.ConejoPapas = new plato_1.Plate('Conejo con papas Nuevas', 'Segundo plato', [Alimento.Conejo, Alimento.PapasNuevas], [150, 40]);
// Postre
exports.MousseCasa = new plato_1.Plate('Mousse de la casa', 'Postre', [Alimento.MousseChocolate, Alimento.Naranja, Alimento.Fresa], [95, 20, 36]);
exports.HeladoPlatano = new plato_1.Plate('Helado con platano', 'Postre', [Alimento.Helado, Alimento.Platano], [80, 65]);
exports.YogurFresasLimon = new plato_1.Plate('Yogur natural entero con fresas y limon', 'Postre', [Alimento.YogurNaturalEntero, Alimento.Fresa, Alimento.Limon], [120, 55, 32]);
exports.FlanHuevoHelado = new plato_1.Plate('Flan de huevo con helado de fresas', 'Postre', [Alimento.FlanHuevo, Alimento.Helado, Alimento.Fresa], [95, 55, 31]);
exports.HeladoCasa = new plato_1.Plate('Helado de la casa', 'Postre', [Alimento.Helado, Alimento.Limon, Alimento.Nata, Alimento.Platano], [250, 50, 75, 100]);
//# sourceMappingURL=dishes.js.map