"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexscreenerService = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
const common_2 = require("../utils/common");
let DexscreenerService = class DexscreenerService {
    async onModuleInit() {
        console.log('DexscreenerService');
    }
    async getDexscreen(tokenAddress) {
        try {
            const url = `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`;
            const res = await (0, node_fetch_1.default)(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
                },
            });
            const resData = await res.json();
            const pairs = resData.pairs;
            if (pairs.length > 0) {
                const pairData = pairs[0];
                const volumeH24 = pairData.volume.h24;
                const tokenData = {
                    MarketCap: (0, common_2.formatNum)(pairData.fdv),
                    Volume: (0, common_2.formatNum)(volumeH24),
                };
                return {
                    isSucceed: true,
                    msg: 'Success',
                    data: {
                        tokenData,
                    },
                };
            }
        }
        catch (error) {
            return {
                isSucceed: false,
                msg: error.message,
                data: null,
            };
        }
    }
};
exports.DexscreenerService = DexscreenerService;
exports.DexscreenerService = DexscreenerService = __decorate([
    (0, common_1.Injectable)()
], DexscreenerService);
//# sourceMappingURL=dexscreener.service.js.map