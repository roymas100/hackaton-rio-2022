"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditionerModule = void 0;
const common_1 = require("@nestjs/common");
const air_conditioner_controller_1 = require("./controllers/air-conditioner.controller");
const air_conditioner_service_1 = require("./services/air-conditioner.service");
let AirConditionerModule = class AirConditionerModule {
};
AirConditionerModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [air_conditioner_controller_1.AirConditionerController],
        providers: [air_conditioner_service_1.AirConditionerService],
    })
], AirConditionerModule);
exports.AirConditionerModule = AirConditionerModule;
//# sourceMappingURL=air-conditioner.module.js.map