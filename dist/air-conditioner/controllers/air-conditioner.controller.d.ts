import { AirConditionerService } from '../services/air-conditioner.service';
import { PeriodDTO } from './periodDTO';
export declare class AirConditionerController {
    private readonly service;
    constructor(service: AirConditionerService);
    findAll(): Promise<{
        data: any[];
    }>;
    findOne(id: string): Promise<{
        data: {
            id: string;
            isActive: boolean;
            temperature: number;
            kiloWattsPerHour: number;
            totalActiveHours: number;
        };
    }>;
    toggleAir(id: string): Promise<{
        data: {
            id: string;
            isActive: boolean;
            temperature: number;
            kiloWattsPerHour: number;
            totalActiveHours: number;
        };
    }>;
    findAllLogs(): Promise<{
        message: {};
        data: any[];
    }>;
    findOneLog(id: string): Promise<{
        data: {
            id: string;
            deviceId: string;
            date: string;
            activeHours: number;
        };
    }>;
    findByPeriod(id: string, period: PeriodDTO): Promise<{
        data: any[];
    }>;
}
