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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatsService = void 0;
const common_1 = require("@nestjs/common");
const dexscreener_service_1 = require("../dexscreener/dexscreener.service");
const dextools_service_1 = require("../dextools/dextools.service");
let GetStatsService = class GetStatsService {
    constructor(DextoolsService, dexscreenerService) {
        this.DextoolsService = DextoolsService;
        this.dexscreenerService = dexscreenerService;
    }
    async onModuleInit() {
        console.log('getStatsService');
    }
    async checkStats(tokenAddress) {
        try {
            const dexscreener = await this.dexscreenerService.getDexscreen(tokenAddress);
            const dextool = await this.DextoolsService.getTokenInfo(tokenAddress);
            const dextools = dextool.data;
            if (dexscreener.isSucceed) {
                const formattedInfo = {
                    Stats: {
                        'Market cap': dexscreener.data.tokenData.MarketCap,
                        'Volume(24h)': dexscreener.data.tokenData.Volume,
                        'Total supply': dextools.TotalSupply.toFixed(2),
                        'Max supply': dextools.MaxSupply.toFixed(2),
                        'Circulating supply': dextools.CirculatingSupply.toFixed(2),
                        'Holding': dextools.Holders
                    }
                };
                return formattedInfo;
            }
            else {
                console.error('Lỗi khi lấy dữ liệu token:', dexscreener.msg);
                return null;
            }
        }
        catch (error) {
            console.error('Lỗi khi kiểm tra Stats:', error);
            return null;
        }
    }
};
exports.GetStatsService = GetStatsService;
exports.GetStatsService = GetStatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dextools_service_1.DextoolsService,
        dexscreener_service_1.DexscreenerService])
], GetStatsService);
//# sourceMappingURL=getStats.service.js.map