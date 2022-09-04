import { WaterResourceService } from '../services/water-resource.service';
import { PeriodDTO } from './periodDTO';
export declare class WaterResourcesController {
    private readonly service;
    constructor(service: WaterResourceService);
    findAll(): Promise<{
        data: any[];
    }>;
    findOne(id: string): Promise<{
        data: {
            id: string;
            totalVolume: number;
        };
    }>;
    findByWaterResource(id: string): Promise<{
        data: any[];
    }>;
    findAllLogs(): Promise<{
        message: {};
        data: any[];
    }>;
    findOneLog(id: string): Promise<{
        data: {
            id: string;
            waterResourceId: string;
            date: string;
            dailyVolume: number;
        };
    }>;
    findByPeriod(id: string, period: PeriodDTO): Promise<{
        data: any[];
    }>;
}
