import {Carta} from "../carta";
import * as Menu from "./menus";
import * as Dish from "./dishes";

export const carta = new Carta([Menu.Menu1, Menu.Menu2, Menu.Menu3,
  Menu.Menu4, Menu.Menu5],
[Dish.CremaCalabacin, Dish.AguacatesRellenos, Dish.PastaConAtun,
  Dish.MousseCasa, Dish.HeladoCasa]);
