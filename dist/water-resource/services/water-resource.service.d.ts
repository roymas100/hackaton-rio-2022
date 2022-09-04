export declare class WaterResourceService {
    findAllData(): Promise<any[]>;
    findOneData(id: string): Promise<{
        id: string;
        totalVolume: number;
    }>;
    findAllLogs(): Promise<any[]>;
    findOneLog(id: string): Promise<{
        id: string;
        waterResourceId: string;
        date: string;
        dailyVolume: number;
    }>;
    findByWaterResource(id: string): Promise<any[]>;
    findLogByPeriod(id: string, startDate: Date, finishDate: Date): Promise<any[]>;
    generateWaterResource(quantity: number): Promise<any[]>;
    generateWaterResourceLog(quantity: number, waterResourceId?: string, startDate?: Date, finishDate?: Date): Promise<any[]>;
}
