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
exports.Menu5 = exports.Menu4 = exports.Menu3 = exports.Menu2 = exports.Menu1 = void 0;
const menu_1 = require("../menu");
const Dish = __importStar(require("./dishes"));
const menu1 = [Dish.QuesoAsadoSetas, Dish.LentejasCompuestas,
    Dish.PastaConAtun];
exports.Menu1 = new menu_1.Menu(menu1);
const menu2 = [Dish.PanConTomate, Dish.Ensalada,
    Dish.PolloNaranja, Dish.HeladoPlatano];
exports.Menu2 = new menu_1.Menu(menu2);
const menu3 = [Dish.PanConQueso, Dish.GarbanzosCompuestos,
    Dish.ChuletasZT, Dish.YogurFresasLimon];
exports.Menu3 = new menu_1.Menu(menu3);
const menu4 = [Dish.TartarSalmonAguacate, Dish.EnsaladaDePasta,
    Dish.TerneraEncebollado, Dish.MousseCasa];
exports.Menu4 = new menu_1.Menu(menu4);
const menu5 = [Dish.AguacatesRellenos, Dish.CremaCalabacin,
    Dish.ConejoPapas, Dish.HeladoCasa];
exports.Menu5 = new menu_1.Menu(menu5);
//# sourceMappingURL=menus.js.map