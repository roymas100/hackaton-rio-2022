export interface IWaterResourcesLog {
  id: string;
  waterResourceId: string;
  date: string;
  dailyVolume: number;
}

export interface IWaterResources {
  id: string;
  totalVolume: number;
}
