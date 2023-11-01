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
exports.GetStatsController = void 0;
const common_1 = require("@nestjs/common");
const getStats_service_1 = require("./getStats.service");
let GetStatsController = class GetStatsController {
    constructor(getStatsService) {
        this.getStatsService = getStatsService;
    }
    async getStats(tokenAddress) {
        try {
            const Stats = await this.getStatsService.checkStats(tokenAddress);
            if (Stats) {
                return {
                    data: Stats,
                    success: true,
                    message: 'Data retrieved successfully',
                };
            }
            else {
                return {
                    data: null,
                    success: false,
                    message: 'No data found for the provided parameters',
                };
            }
        }
        catch (error) {
            return {
                data: null,
                success: false,
                message: error.message,
            };
        }
    }
};
exports.GetStatsController = GetStatsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('tokenAddress')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetStatsController.prototype, "getStats", null);
exports.GetStatsController = GetStatsController = __decorate([
    (0, common_1.Controller)('Stats'),
    __metadata("design:paramtypes", [getStats_service_1.GetStatsService])
], GetStatsController);
//# sourceMappingURL=getStats.controller.js.map