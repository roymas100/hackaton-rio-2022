export interface IAirConditionerLog {
  id: string;
  deviceId: string;
  date: string;
  activeHours: number;
}

export interface IAirConditioner {
  id: string;
  isActive: boolean;
  temperature: number;
  kiloWattsPerHour: number;
  totalActiveHours: number;
}
