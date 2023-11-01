"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatsModule = void 0;
const common_1 = require("@nestjs/common");
const getStats_service_1 = require("./getStats.service");
const getStats_controller_1 = require("./getStats.controller");
const dexscreener_module_1 = require("../dexscreener/dexscreener.module");
const dextools_module_1 = require("../dextools/dextools.module");
let GetStatsModule = class GetStatsModule {
};
exports.GetStatsModule = GetStatsModule;
exports.GetStatsModule = GetStatsModule = __decorate([
    (0, common_1.Module)({
        imports: [dexscreener_module_1.DexscreenerModule, dextools_module_1.DextoolsModule],
        providers: [getStats_service_1.GetStatsService],
        controllers: [getStats_controller_1.GetStatsController],
    })
], GetStatsModule);
//# sourceMappingURL=getStats.module.js.map