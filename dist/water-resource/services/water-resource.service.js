"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterResourceService = void 0;
const faker_1 = require("@faker-js/faker");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let WaterResourceService = class WaterResourceService {
    async findAllData() {
        return this.generateWaterResource(10);
    }
    async findOneData(id) {
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        return {
            id: id,
            totalVolume: randomInt(0, 10000),
        };
    }
    async findAllLogs() {
        return this.generateWaterResourceLog(10);
    }
    async findOneLog(id) {
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        const date = faker_1.faker.date.recent(randomInt(2, 40));
        const formatedDate = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        return {
            id: id,
            waterResourceId: (0, crypto_1.randomUUID)(),
            date: formatedDate,
            dailyVolume: randomInt(0, 2000),
        };
    }
    async findByWaterResource(id) {
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        return this.generateWaterResourceLog(randomInt(1, 10), id);
    }
    async findLogByPeriod(id, startDate, finishDate) {
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        return this.generateWaterResourceLog(randomInt(1, 10), null, startDate, finishDate);
    }
    async generateWaterResource(quantity) {
        const array = Array.from({ length: quantity }, (_, i) => i + 1);
        const response = [];
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        for (const item of array) {
            const id = (0, crypto_1.randomUUID)();
            response.push({
                id: id,
                totalVolume: randomInt(0, 10000),
            });
        }
        return response;
    }
    async generateWaterResourceLog(quantity, waterResourceId, startDate, finishDate) {
        const array = Array.from({ length: quantity }, (_, i) => i + 1);
        const response = [];
        let startMonth = null, finishMonth = null;
        if (startDate && finishDate) {
            startMonth = startDate.toString().slice(5, 7);
            finishMonth = finishDate.toString().slice(5, 7);
        }
        const { randomInt } = await Promise.resolve().then(() => require('crypto'));
        for (const item of array) {
            const date = faker_1.faker.date.recent(randomInt(2, 40));
            if (date.getDay() == 0)
                date.setDate(1);
            const formatedDate = startMonth != null && finishMonth != null
                ? date.getDay() +
                    '/' +
                    randomInt(Number(startMonth), Number(finishMonth) + 1) +
                    '/' +
                    date.getFullYear()
                : date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
            response.push({
                id: (0, crypto_1.randomUUID)(),
                waterResourceId: waterResourceId ? waterResourceId : (0, crypto_1.randomUUID)(),
                date: formatedDate,
                dailyVolume: randomInt(0, 2000),
            });
        }
        return response;
    }
};
WaterResourceService = __decorate([
    (0, common_1.Injectable)()
], WaterResourceService);
exports.WaterResourceService = WaterResourceService;
//# sourceMappingURL=water-resource.service.js.map