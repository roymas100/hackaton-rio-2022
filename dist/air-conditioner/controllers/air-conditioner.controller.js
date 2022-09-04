"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditionerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const air_conditioner_service_1 = require("../services/air-conditioner.service");
let AirConditionerController = class AirConditionerController {
    constructor(service) {
        this.service = service;
    }
    async findAll() {
        try {
            const data = await this.service.findAllData();
            return { data: data };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOne(id) {
        try {
            const data = await this.service.findOneData(id);
            return { data: data };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async toggleAir(id) {
        try {
            const data = await this.service.toggleAirConditioner(id);
            return { data: data };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findAllLogs() {
        try {
            const data = await this.service.findAllLogs();
            return { message: {}, data: data };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOneLog(id) {
        try {
            const data = await this.service.findOneLog(id);
            return { data: data };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findByPeriod(id, period) {
        try {
            const data = await this.service.findDeviceLogByPeriod(id, period.startDate, period.finishDate);
            return { data: data };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Retrives all air-conditioner data' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AirConditionerController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Retrives one air-conditioner data by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirConditionerController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Turns on/off a certain air-conditioner' }),
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirConditionerController.prototype, "toggleAir", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Retrives all air-conditioner log data' }),
    (0, common_1.Get)('log/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AirConditionerController.prototype, "findAllLogs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Retrives one air-conditioner log data' }),
    (0, common_1.Get)('log/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirConditionerController.prototype, "findOneLog", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `Retrives all air-conditioner log data of a period according 
      to a certain device's id and period`,
    }),
    (0, common_1.Post)('log/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AirConditionerController.prototype, "findByPeriod", null);
AirConditionerController = __decorate([
    (0, swagger_1.ApiTags)('Air Conditioner'),
    (0, common_1.Controller)('air-conditioner'),
    __metadata("design:paramtypes", [air_conditioner_service_1.AirConditionerService])
], AirConditionerController);
exports.AirConditionerController = AirConditionerController;
//# sourceMappingURL=air-conditioner.controller.js.map