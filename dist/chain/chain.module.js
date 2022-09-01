"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainModule = void 0;
const common_1 = require("@nestjs/common");
const chain_service_1 = require("./chain.service");
const chain_controller_1 = require("./chain.controller");
const logger_middleware_1 = require("../helper/logger.middleware");
let ChainModule = class ChainModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.logger)
            .forRoutes({ path: 'chain', method: common_1.RequestMethod.GET });
    }
};
ChainModule = __decorate([
    (0, common_1.Module)({
        controllers: [chain_controller_1.ChainController],
        providers: [chain_service_1.ChainService]
    })
], ChainModule);
exports.ChainModule = ChainModule;
//# sourceMappingURL=chain.module.js.map