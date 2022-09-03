import energyLeaf from "./energy-savings-leaf.svg";
import bell from "./bell.svg";
import room from "./room.svg";
import corridor from "./corridor.svg";
import gourmet from "./gourmet.svg";

// eslint-disable-next-line import/no-anonymous-default-export
const icons = {
  energyLeaf,
  bell,
  room,
  corridor,
  gourmet,
};

export default icons;

export type IconsType = typeof icons;
export type IconsKey = keyof typeof icons;
