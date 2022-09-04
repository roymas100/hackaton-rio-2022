"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditionerService = void 0;
const faker_1 = require("@faker-js/faker");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let AirConditionerService = class AirConditionerService {
    constructor() {
        this.item = {
            id: 'de3b5676-f210-47af-8d8b-1e05fbaa7c8b',
            isActive: true,
            temperature: 18,
            kiloWattsPerHour: 350,
            totalActiveHours: 288,
        };
    }
    async findAllData() {
        return await this.generateRandomicAirConditioner(10);
    }
    async findOneData(id) {
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        return {
            id: id,
            isActive: true,
            temperature: randomInt(16, 26),
            kiloWattsPerHour: randomInt(200, 500),
            totalActiveHours: randomInt(0, 800),
        };
    }
    async findAllLogs() {
        return await this.generateRandomicAirConditionerLog(10);
    }
    async findOneLog(id) {
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        const date = faker_1.faker.date.recent(randomInt(2, 100));
        if (date.getDay() == 0)
            date.setDate(1);
        const formatedDate = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        return {
            id: id,
            deviceId: id,
            date: formatedDate,
            activeHours: randomInt(0, 24),
        };
    }
    async findDeviceLogByPeriod(deviceId, startDate, finishDate) {
        return await this.generateRandomicAirConditionerLog(10, startDate, finishDate);
    }
    async toggleAirConditioner(id) {
        const oldValue = this.item;
        this.item = {
            id: id,
            isActive: oldValue.isActive ? false : true,
            temperature: 18,
            kiloWattsPerHour: 350,
            totalActiveHours: 288,
        };
        return this.item;
    }
    async generateRandomicAirConditioner(quantity) {
        const array = Array.from({ length: quantity }, (_, i) => i + 1);
        const response = [];
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        const id = (0, crypto_1.randomUUID)();
        for (const item of array) {
            response.push({
                id: id,
                isActive: true,
                temperature: randomInt(16, 26),
                kiloWattsPerHour: randomInt(200, 500),
                totalActiveHours: randomInt(0, 800),
            });
        }
        return response;
    }
    async generateRandomicAirConditionerLog(quantity, startDate, finishDate) {
        const array = Array.from({ length: quantity }, (_, i) => i + 1);
        const response = [];
        let startMonth = null, finishMonth = null;
        if (startDate && finishDate) {
            startMonth = startDate.toString().slice(5, 7);
            finishMonth = finishDate.toString().slice(5, 7);
        }
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        for (const item of array) {
            const date = faker_1.faker.date.recent(randomInt(2, 100));
            if (date.getDay() == 0)
                date.setDate(1);
            const formatedDate = startMonth != null && finishMonth != null
                ? date.getDay() +
                    '/' +
                    randomInt(Number(startMonth), Number(finishMonth) + 1) +
                    '/' +
                    date.getFullYear()
                : date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
            const id = (0, crypto_1.randomUUID)();
            response.push({
                id: (0, crypto_1.randomUUID)(),
                deviceId: id,
                date: formatedDate,
                activeHours: randomInt(0, 24),
            });
        }
        return response;
    }
};
AirConditionerService = __decorate([
    (0, common_1.Injectable)()
], AirConditionerService);
exports.AirConditionerService = AirConditionerService;
//# sourceMappingURL=air-conditioner.service.js.map