import energyLeaf from "./energy-savings-leaf.svg";
import bell from "./bell.svg";
import corridor from "./corridor.svg";
import gourmet from "./gourmet.svg";
import water from "./water.svg";
import notification from "./notification.svg";
import arrowRight from "./arrow-right.svg";
import lighting from "./lighting.svg";
import lightingWhite from "./lighting-white.svg";
import temperature from "./temperature.svg";
import conditioner from "./conditioner.svg";
import termometro from "./termometro.svg";
import drop from "./drop.svg";

import portaAzul from "./porta-azul.svg";
import portaBranca from "./porta-branca.svg";
import portaVerde from "./porta-verde.svg";

import calendarAzul from "./calendar-azul.svg";
import calendarBranca from "./calendar-branco.svg";
import calendarVerde from "./calendar-verde.svg";

import roomAzul from "./room-azul.svg";
import roomBranca from "./room-branco.svg";
import roomVerde from "./room-verde.svg";

// eslint-disable-next-line import/no-anonymous-default-export
const icons = {
  energyLeaf,
  bell,
  corridor,
  gourmet,
  water,
  notification,
  arrowRight,
  lighting,
  temperature,
  conditioner,
  termometro,
  lightingWhite,
  drop,
  calendar: {
    verde: calendarVerde,
    azul: calendarAzul,
    branco: calendarBranca,
  },
  porta: {
    verde: portaVerde,
    azul: portaAzul,
    branco: portaBranca,
  },
  room: {
    verde: roomVerde,
    azul: roomAzul,
    branco: roomBranca,
  },
};

export default icons;

export type IconsType = typeof icons;
export type IconsKey = keyof typeof icons;
