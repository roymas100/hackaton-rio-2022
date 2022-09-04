export declare class AirConditionerService {
    private item;
    findAllData(): Promise<any[]>;
    findOneData(id: string): Promise<{
        id: string;
        isActive: boolean;
        temperature: number;
        kiloWattsPerHour: number;
        totalActiveHours: number;
    }>;
    findAllLogs(): Promise<any[]>;
    findOneLog(id: string): Promise<{
        id: string;
        deviceId: string;
        date: string;
        activeHours: number;
    }>;
    findDeviceLogByPeriod(deviceId: string, startDate: Date, finishDate: Date): Promise<any[]>;
    toggleAirConditioner(id: string): Promise<{
        id: string;
        isActive: boolean;
        temperature: number;
        kiloWattsPerHour: number;
        totalActiveHours: number;
    }>;
    generateRandomicAirConditioner(quantity: number): Promise<any[]>;
    generateRandomicAirConditionerLog(quantity: number, startDate?: Date, finishDate?: Date): Promise<any[]>;
}
