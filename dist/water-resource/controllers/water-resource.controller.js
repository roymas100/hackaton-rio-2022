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
exports.WaterResourcesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const water_resource_service_1 = require("../services/water-resource.service");
let WaterResourcesController = class WaterResourcesController {
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
    async findByWaterResource(id) {
        try {
            const data = await this.service.findByWaterResource(id);
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
            const data = await this.service.findLogByPeriod(id, period.startDate, period.finishDate);
            return { data: data };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: `Retrives all water resources' data` }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WaterResourcesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: `Retrives one water resources' data by its id` }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WaterResourcesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `Retrives water resources' log data according to resource's id`,
    }),
    (0, common_1.Get)(':id/log'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WaterResourcesController.prototype, "findByWaterResource", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `Retrives all water resources' log data`,
    }),
    (0, common_1.Get)('log/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WaterResourcesController.prototype, "findAllLogs", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `Retrives one water resources' log data according to log's id`,
    }),
    (0, common_1.Get)('log/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WaterResourcesController.prototype, "findOneLog", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `Retrives water resources' log data of a period 
      according water resource id and period`,
    }),
    (0, common_1.Post)('log/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WaterResourcesController.prototype, "findByPeriod", null);
WaterResourcesController = __decorate([
    (0, swagger_1.ApiTags)('Water Resources'),
    (0, common_1.Controller)('water-resources'),
    __metadata("design:paramtypes", [water_resource_service_1.WaterResourceService])
], WaterResourcesController);
exports.WaterResourcesController = WaterResourcesController;
//# sourceMappingURL=water-resource.controller.js.map