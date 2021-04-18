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
exports.carta = void 0;
/* eslint-disable max-len */
const carta_1 = require("../carta");
const Menu = __importStar(require("./menus"));
const Dish = __importStar(require("./dishes"));
exports.carta = new carta_1.Carta([Menu.Menu1, Menu.Menu2, Menu.Menu3,
    Menu.Menu4, Menu.Menu5], [Dish.CremaCalabacin, Dish.QuesoAsadoSetas, Dish.PanConTomate, Dish.PanConQueso, Dish.TartarSalmonAguacate, Dish.AguacatesRellenos,
    Dish.LentejasCompuestas, Dish.Ensalada, Dish.GarbanzosCompuestos, Dish.EnsaladaDePasta, Dish.CremaCalabacin,
    Dish.PastaConAtun, Dish.PolloNaranja, Dish.ChuletasZT, Dish.TerneraEncebollado, Dish.ConejoPapas,
    Dish.MousseCasa, Dish.HeladoPlatano, Dish.YogurFresasLimon, Dish.FlanHuevoHelado, Dish.HeladoCasa]);
//# sourceMappingURL=carta.js.map