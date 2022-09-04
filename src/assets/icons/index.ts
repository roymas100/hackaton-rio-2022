import energyLeaf from "./energy-savings-leaf.svg";
import bell from "./bell.svg";
import room from "./room.svg";
import corridor from "./corridor.svg";
import gourmet from "./gourmet.svg";
import water from "./water.svg";
import notification from "./notification.svg";
import arrowRight from "./arrow-right.svg";
import lighting from "./lighting.svg";
import temperature from "./temperature.svg";
import conditioner from "./conditioner.svg";
import termometro from "./termometro.svg";

// eslint-disable-next-line import/no-anonymous-default-export
const icons = {
  energyLeaf,
  bell,
  room,
  corridor,
  gourmet,
  water,
  notification,
  arrowRight,
  lighting,
  temperature,
  conditioner,
  termometro,
};

export default icons;

export type IconsType = typeof icons;
export type IconsKey = keyof typeof icons;
